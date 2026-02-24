CREATE DATABASE IF NOT EXISTS monapp;
USE monapp;

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contenu TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (contenu) VALUES ('Bonjour depuis MySQL !');
INSERT INTO users (name, email) VALUES 
    ('Kyorakuuuuu', 'kyorakuBIBOOO@gmail.com'),
    ('MMHHHHHHH', 'MMHHHHH@gmail.com')
ON DUPLICATE KEY UPDATE name=name;
