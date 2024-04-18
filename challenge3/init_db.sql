CREATE DATABASE IF NOT EXISTS booksdb;
USE booksdb;

CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

INSERT INTO books (title, author) VALUES
('Permutation City', 'Greg Egan'),
('Solaris', 'Stanislaw Lem'),
('Atlas Shrugged', 'Ayn Rand'),
('Player of Games', 'Ian Banks'),
('Blindsight', 'Peter Watts')
ON DUPLICATE KEY UPDATE title=VALUES(title), author=VALUES(author);
