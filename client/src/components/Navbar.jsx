import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // Navigate to the search page with the user-entered query
      navigate(`/search?q=${searchTerm}`);
    } else {
      // If no search term is entered, default to the home page
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      {/* Navigation links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        {/* Pass country='in' to NewsFeed via the URL query */}
        <li>
          <button
            onClick={() => navigate('/india')}
            style={{ cursor: 'pointer', border: 'none', background: 'none' }}
          >
            India
          </button>
        </li>
      </ul>

      {/* Search bar */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
