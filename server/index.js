const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const productRoutes = require('./routes/products');

// Middleware
app.use(cors()); // allow frontend access
app.use(express.json()); // parse JSON bodies

// Routes
app.use('/products', productRoutes);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`[SERVER] API running at http://localhost:${PORT}`);
});
