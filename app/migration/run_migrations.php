<?php
// app/migration/run_migrations.php - Script de inicialização da base de dados SQLite

// Inclui arquivos de inicialização a partir do diretório raiz
require_once __DIR__ . '/../../config.php';
require_once __DIR__ . '/../../autoload.php';

try {
    $db = Database::getConnection();

    // SQL de criação da tabela de usuários
    $sql = "CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        criado_em TEXT NOT NULL
    );";

    $db->exec($sql);
    echo "MIGRAÇÃO DE SUCESSO: Banco de dados SQLite inicializado. Tabela 'usuarios' criada com êxito!\n";
} catch (Exception $e) {
    echo "ERRO DE MIGRAÇÃO: " . $e->getMessage() . "\n";
}
