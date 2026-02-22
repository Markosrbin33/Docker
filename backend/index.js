const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'monapp'
});

db.connect((err) => {
  if (err) {
    console.error('Erreur connexion BDD:', err);
  } else {
    console.log('Connecté à la base de données !');
  }
});

app.get('/api/message', (req, res) => {
  db.query('SELECT contenu FROM messages LIMIT 1', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Erreur BDD' });
    } else {
      res.json({ message: results[0].contenu });
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur back-end démarré sur le port 3000');
});
