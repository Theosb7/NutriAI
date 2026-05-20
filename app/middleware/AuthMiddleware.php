<?php
// app/middleware/AuthMiddleware.php - Proteção de rotas restritas

class AuthMiddleware {
    // Verifica se o usuário está logado na sessão ativa
    public static function check() {
        if (!isset($_SESSION['usuario_id'])) {
            // Se não logado, redirecionar para a tela de login com uma mensagem
            $_SESSION['auth_error'] = "Você precisa estar autenticado para acessar esta página.";
            header("Location: index.php?action=login");
            exit;
        }
    }
}
