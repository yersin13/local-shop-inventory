const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /products - fetch all products
router.get('/', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      console.error('[GET /products] Error:', err.message);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;