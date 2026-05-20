<?php
// config.php - Configurações Globais do Sistema

// Ativar exibição de erros para desenvolvimento (Passo 6: Validação)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Definir diretório base
define('BASE_DIR', __DIR__);

// Definir caminho do banco de dados SQLite (Passo 2)
define('DB_PATH', BASE_DIR . '/app/model/banco.sqlite');

// Inicializar Sessão de forma segura
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
