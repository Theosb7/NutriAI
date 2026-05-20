<?php
// autoload.php - Carregamento dinâmico de classes (Passo 4)

spl_autoload_register(function ($className) {
    // Definir as pastas onde as classes podem estar localizadas
    $directories = [
        __DIR__ . '/app/controller/',
        __DIR__ . '/app/model/',
        __DIR__ . '/app/middleware/',
        __DIR__ . '/app/services/',
        __DIR__ . '/app/router/'
    ];

    // Procurar a classe nas pastas definidas
    foreach ($directories as $dir) {
        $file = $dir . $className . '.php';
        if (file_exists($file)) {
            require_once $file;
            return;
        }
    }
});
