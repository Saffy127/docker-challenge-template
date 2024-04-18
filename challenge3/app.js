const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;
const os = require('os');
const hostname = os.hostname();

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/api/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) return res.status(500).send('Database error');
    res.json(results);
  });
});

app.get('/api/stats', (req, res) => {
  res.json({ message: "API is running.", hostname: hostname });
});

app.get('/api/books/:id', (req, res) => {
  db.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send('Database error');
    if (results.length == 0) return res.status(404).send('Book not found');
    res.json(results[0]);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
