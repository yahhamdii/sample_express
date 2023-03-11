const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'expressapp',
  password: 'root',
  port: 5432,
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET all users
app.get('/users', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM users');
  res.send(rows);
});

// POST a new user
app.post('/users', async (req, res) => {

  console.log(req.body);
  const { name, email } = req.body;
  await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
  res.send('User added successfully');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
