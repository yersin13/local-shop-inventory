const express = require('express');
const router = express.Router();

// Temporary dummy data (replace with DB queries later)
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Apple', quantity: 50, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 30, price: 0.3 }
  ]);
});

module.exports = router;