const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();


// Middleware
const allowedDomain = 'https://news-app-a591e.web.app';

// CORS middleware: Allow requests only from the allowed domain
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || origin === allowedDomain) {
      callback(null, true); // Allow if no origin or the origin is allowedDomain
    } else {
      callback(new Error('Not allowed by CORS')); // Block other origins
    }
  }
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  const origin = req.get('Origin') || req.get('Referer');

  // If origin or referer is not allowed, block the request
  if (origin && origin.includes(allowedDomain)) {
    next(); 
  } else {
    return res.status(403).json({ message: 'Forbidden: Access is denied.' });
  }
});


app.use(express.json()); 

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
