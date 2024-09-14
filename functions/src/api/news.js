const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/news", async (req, res) => {
  const apiKey = process.env.GNEWS_API_KEY;
  const query = req.query.q || "example";
  const language = req.query.lang || "en";
  const country = req.query.country || "us";
  const max = req.query.max || 10;
  const page = req.query.page || 1;

  const url = `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&max=${max}&page=${page}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news data" });
  }
});

module.exports = router;
