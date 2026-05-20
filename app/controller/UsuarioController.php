<?php
// app/controller/UsuarioController.php - Controlador Central de Usuários e Páginas

class UsuarioController {
    private $usuarioService;

    public function __construct() {
        $this->usuarioService = new UsuarioService();
    }

    // Renderiza a página principal do painel (Dashboard)
    public function dashboard() {
        include BASE_DIR . '/view/index.html';
    }

    // Renderiza a calculadora nutricional
    public function calculadora() {
        include BASE_DIR . '/view/calculadora.html';
    }

    // Renderiza o formulário de cadastro de alimentos
    public function addFood() {
        include BASE_DIR . '/view/forms.html';
    }

    // Renderiza o Quiz nutricional
    public function quiz() {
        include BASE_DIR . '/view/quiz.html';
    }

    // Gerencia o fluxo de Cadastro de Usuários
    public function register() {
        $error = null;
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            try {
                $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
                $email = isset($_POST['email']) ? $_POST['email'] : '';
                $senha = isset($_POST['senha']) ? $_POST['senha'] : '';

                $this->usuarioService->registrar($nome, $email, $senha);

                $_SESSION['success_message'] = "Cadastro realizado com sucesso! Insira suas credenciais abaixo.";
                header("Location: index.php?action=login");
                exit;
            } catch (Exception $e) {
                $error = $e->getMessage();
            }
        }
        include BASE_DIR . '/view/cadastro.html';
    }

    // Gerencia o fluxo de Login do Usuário
    public function login() {
        $error = null;
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            try {
                $email = isset($_POST['email']) ? $_POST['email'] : '';
                $senha = isset($_POST['senha']) ? $_POST['senha'] : '';

                $this->usuarioService->autenticar($email, $senha);

                header("Location: index.php?action=users");
                exit;
            } catch (Exception $e) {
                $error = $e->getMessage();
            }
        }
        include BASE_DIR . '/view/login.html';
    }

    // Renderiza a listagem segura de usuários
    public function list() {
        try {
            $usuarios = $this->usuarioService->listarTodos();
        } catch (Exception $e) {
            $usuarios = [];
            $error = $e->getMessage();
        }
        include BASE_DIR . '/view/listagem.html';
    }

    // Realiza o encerramento da sessão
    public function logout() {
        $_SESSION = [];
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
        header("Location: index.php?action=login");
        exit;
    }
}
