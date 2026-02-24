const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'monapp'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Erreur connexion BDD:', err);
  } else {
    console.log('✅ Connecté à la base de données MySQL !');
  }
});

// Route GET users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur BDD' });
    } else {
      res.json(results);
    }
  });
});

// Route GET message
app.get('/message', (req, res) => {
  db.query('SELECT contenu FROM messages LIMIT 1', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur BDD' });
    } else if (results.length > 0) {
      res.json({ message: results[0].contenu });
    } else {
      res.json({ message: 'Aucun message trouvé' });
    }
  });
});

// Route POST users
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  db.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erreur ajout' });
      } else {
        res.status(201).json({ 
          id: result.insertId, 
          name, 
          email 
        });
      }
    }
  );
});

// NE PAS OUBLIER 0.0.0.0
app.listen(3000, '0.0.0.0', () => {
  console.log('🚀 Serveur démarré sur le port 3000');
});
