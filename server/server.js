const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const newsRoute = require("./api/news");

const app = express();
const PORT = process.env.PORT || 5000; 

//! Middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("<h2>News app backend is running...</h2>");
});

//! RESTful API route
app.use("/api", newsRoute);

// Server listener
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
