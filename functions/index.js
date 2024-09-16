const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();


// Middleware
const corsOptions = {
  origin: 'https://news-app-a591e.web.app/'
};

app.use(cors(corsOptions));
app.use(express.json()); // For parsing JSON

// Routes
const newsRoute = require("./src/api/news");

// Example route
app.get("/", (req, res) => {
  res.send("<h2>News app backend is running...</h2>");
});

//! RESTful API route
app.use("/api", newsRoute);

// Firebase Function Export
exports.app = functions.https.onRequest(app);
