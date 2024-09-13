const express = require("express");
const router = express.Router();

router.get("/news", async (req, res) => {
  const apiKey = process.env.GNEWS_API_KEY;
  const query = req.query.q || "example"; // Default query if none provided
  const language = req.query.lang || "en"; // Default language is English
  const country = req.query.country || "us"; // Default country is US
  const max = req.query.max || 10; // Default limit is 10 articles

  const url = `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&max=${max}&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Error fetching news data" });
  }
});
module.exports = router;
