import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './style/NewsFeed.css';

// Optional: Import your Loading component
import Loading from './Loading';

const NewsFeed = ({ country = "us", defaultQuery = "technology" }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1); // Track current page
  const [max, setMax] = useState(15); // Results per page
  const [loading, setLoading] = useState(true); // Track loading state

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q") || defaultQuery; // Use default query if none is provided
  const selectedCountry = searchParams.get("country") || country; // Use default country if none is provided

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true before fetching data
      const url = `https://us-central1-news-app-a591e.cloudfunctions.net/app/api/news?q=${searchQuery}&country=${selectedCountry}&max=${max}&page=${page}`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched or an error occurs
      }
    };

    fetchNews();
  }, [searchQuery, selectedCountry, page, max]);

  if (loading) {
    return <Loading />; // Display the Loading component while data is being fetched
  }

  return (
    <div className="news-feed-main">
      <h1 className="feed-page-title">
        Latest News on {searchQuery && `"${searchQuery}"`} from {selectedCountry.toUpperCase()}
      </h1>

      <div className="news-container">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.image} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default NewsFeed;
