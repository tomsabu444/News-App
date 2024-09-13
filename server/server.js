const express = require('express');
const axios = require('axios');
const cros = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cros());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('news app backend is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`);
});
