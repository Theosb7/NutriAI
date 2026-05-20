<?php
// app/services/UsuarioService.php - Camada de Regras de Negócio de Usuários

class UsuarioService {
    private $usuarioModel;

    public function __construct() {
        $this->usuarioModel = new Usuario();
    }

    // Registrar usuário com validações e criptografia de senha
    public function registrar($nome, $email, $senha) {
        // 1. Validações básicas
        $nome = trim($nome);
        $email = trim($email);

        if (empty($nome) || empty($email) || empty($senha)) {
            throw new Exception("Todos os campos (Nome, E-mail e Senha) são obrigatórios.");
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception("O e-mail inserido é inválido.");
        }

        if (strlen($senha) < 6) {
            throw new Exception("A senha deve conter no mínimo 6 caracteres.");
        }

        // 2. Verificar e-mail duplicado
        if ($this->usuarioModel->findByEmail($email)) {
            throw new Exception("Este endereço de e-mail já está cadastrado.");
        }

        // 3. Criptografar senha usando padrão recomendado do PHP (bcrypt)
        $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

        // 4. Salvar
        return $this->usuarioModel->create($nome, $email, $senhaHash);
    }

    // Autenticar usuário
    public function autenticar($email, $senha) {
        $email = trim($email);

        if (empty($email) || empty($senha)) {
            throw new Exception("E-mail e senha são obrigatórios.");
        }

        // 1. Buscar usuário
        $usuario = $this->usuarioModel->findByEmail($email);
        if (!$usuario) {
            throw new Exception("Credenciais incorretas ou usuário não encontrado.");
        }

        // 2. Verificar senha criptografada
        if (!password_verify($senha, $usuario['senha'])) {
            throw new Exception("Senha incorreta.");
        }

        // 3. Login de sucesso: Iniciar sessão do usuário
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['usuario_nome'] = $usuario['nome'];
        $_SESSION['usuario_email'] = $usuario['email'];

        return $usuario;
    }

    // Obter listagem de usuários
    public function listarTodos() {
        return $this->usuarioModel->getAll();
    }
}
