<?php
// app/model/Usuario.php - Acesso a dados da entidade Usuario

class Usuario {
    private $db;

    public function __construct() {
        $this->db = Database::getConnection();
    }

    // Criar um novo usuário no banco de dados
    public function create($nome, $email, $senhaHash) {
        $sql = "INSERT INTO usuarios (nome, email, senha, criado_em) VALUES (:nome, :email, :senha, datetime('now'))";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':nome', $nome, PDO::PARAM_STR);
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        $stmt->bindValue(':senha', $senhaHash, PDO::PARAM_STR);
        return $stmt->execute();
    }

    // Buscar usuário por e-mail (para validação e login)
    public function findByEmail($email) {
        $sql = "SELECT * FROM usuarios WHERE email = :email LIMIT 1";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch();
    }

    // Obter todos os usuários (para a Listagem)
    public function getAll() {
        $sql = "SELECT id, nome, email, criado_em FROM usuarios ORDER BY criado_em DESC";
        $stmt = $this->db->query($sql);
        return $stmt->fetchAll();
    }
}
