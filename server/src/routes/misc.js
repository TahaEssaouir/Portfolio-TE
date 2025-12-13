const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/languages', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM languages');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/certifications', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM certifications');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/interests', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM interests');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
