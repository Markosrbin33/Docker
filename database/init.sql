-- Création de la base de données (si elle n'existe pas)
CREATE DATABASE IF NOT EXISTS monapp;
USE monapp;

-- Création de la table messages
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contenu TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion d'un message de test
INSERT INTO messages (contenu) VALUES 
    ('Bonjour depuis MySQL !')
ON DUPLICATE KEY UPDATE contenu=contenu;
