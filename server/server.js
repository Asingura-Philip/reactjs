// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost', 
  user: process.env.dbuser,      
  password: process.env.password,      
  database: process.env.dbname 
});

// Test the connection
db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

// POST route to handle signup
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const query = 'INSERT INTO Signup (username, email, password) VALUES (?, ?, ?)';
  db.execute(query, [username, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(201).json({ message: 'User created successfully', result });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
