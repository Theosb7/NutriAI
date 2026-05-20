<?php
// app/router/Router.php - Sistema de Roteamento Centralizado (Passo 5)

class Router {
    // Roteia a requisição HTTP para a ação correta
    public function dispatch() {
        // Obter ação a partir do parâmetro 'action' (padrão é dashboard)
        $action = isset($_GET['action']) ? $_GET['action'] : 'dashboard';

        $controller = new UsuarioController();

        switch ($action) {
            case 'register':
                $controller->register();
                break;

            case 'login':
                $controller->login();
                break;

            case 'users':
                // Executar verificação de autenticação via Middleware antes de acessar
                AuthMiddleware::check();
                $controller->list();
                break;

            case 'logout':
                $controller->logout();
                break;

            case 'calculadora':
                $controller->calculadora();
                break;

            case 'add-food':
                $controller->addFood();
                break;

            case 'quiz':
                $controller->quiz();
                break;

            case 'dashboard':
            default:
                $controller->dashboard();
                break;
        }
    }
}
