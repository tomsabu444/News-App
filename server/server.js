const express = require("express");
const cros = require("cors");
require("dotenv").config();

//? Routes
const news = require("./api/news");

const app = express();
const PORT = process.env.PORT;

app.use(cros());
app.use(express.json());

//
app.get("/", (req, res) => {
  res.send("<h2>news app backend is running...</h2>");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

//! Rest full API

app.use("/api", news);
