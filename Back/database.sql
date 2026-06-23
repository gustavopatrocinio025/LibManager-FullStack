CREATE DATABASE IF NOT EXISTS libmanager_db;

USE libmanager_db;


CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    categoria_id INT,

    FOREIGN KEY (categoria_id)
    REFERENCES categorias(id)
);


INSERT INTO categorias (nome)
VALUES
('Tecnologia'),
('Romance'),
('História');


INSERT INTO livros 
(titulo, autor, ano, status, categoria_id)
VALUES
('Clean Code', 'Robert Martin', 2008, 'Disponível', 1),
('Refactoring', 'Martin Fowler', 1999, 'Emprestado', 1),
('Dom Casmurro', 'Machado de Assis', 1899, 'Disponível', 2);