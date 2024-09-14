const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json()); // For parsing JSON

// Example route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Firebase Function Export
exports.app = functions.https.onRequest(app);
