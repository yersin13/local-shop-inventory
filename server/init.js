// server/init.js
const db = require('./db');

// Sample product table (we'll later replace this with Open Food Facts structure)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      brand TEXT,
      category TEXT,
      quantity TEXT,
      nutrition_grade TEXT
    )
  `, (err) => {
    if (err) {
      console.error('[INIT] Table creation error:', err.message);
    } else {
      console.log('[INIT] Products table created or exists already');
    }
  });
});
