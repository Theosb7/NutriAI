<?php
// app/model/Database.php - Conexão Singleton PDO SQLite (Passo 2)

class Database {
    private static $instance = null;
    private $pdo;

    // Construtor privado para garantir o padrão Singleton
    private function __construct() {
        try {
            // Garante que o diretório pai do banco exista
            $dbDir = dirname(DB_PATH);
            if (!is_dir($dbDir)) {
                mkdir($dbDir, 0777, true);
            }

            // Inicializar a conexão PDO SQLite
            $this->pdo = new PDO('sqlite:' . DB_PATH);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Erro crítico ao conectar com o banco SQLite: " . $e->getMessage());
        }
    }

    // Retorna a instância única da conexão PDO
    public static function getConnection() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance->pdo;
    }
}
