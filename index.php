<?php
// index.php - Ponto de Entrada Centralizado (Passo 5)

// 1. Incluir o config.php
require_once __DIR__ . '/config.php';

// 2. Incluir o autoload.php
require_once __DIR__ . '/autoload.php';

// 3. Chamar o router para decidir qual controller deve ser executado
$router = new Router();
$router->dispatch();
