import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const NewsFeed = ({ country = 'us', defaultQuery = 'technology' }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);  // Track current page
  const [max, setMax] = useState(15);   // Results per page

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || defaultQuery; // Use query from URL or default

  useEffect(() => {
    const fetchNews = async () => {
      const url = `http://localhost:5273/api/news?q=${searchQuery}&country=${country}&max=${max}&page=${page}`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [searchQuery, country, page, max]);

  return (
    <div>
      <h1>Latest News {searchQuery && `on "${searchQuery}"`} from {country.toUpperCase()}</h1>

      <div className="news-container">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
