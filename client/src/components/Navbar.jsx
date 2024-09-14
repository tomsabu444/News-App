import React, { useState, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState('us');  // Default country
  const searchRef = useRef();  // Ref for search input
  const navigate = useNavigate();

  const countries = useMemo(() => [
    { code: 'us', name: 'United States' },
    { code: 'in', name: 'India' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'au', name: 'Australia' },
    { code: 'ca', name: 'Canada' },
  ], []);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchRef.current.value.trim();
    
    if (query) {
      // Navigate to /search route with query and country as URL params
      navigate(`/search?q=${query}&country=${selectedCountry}`);
    } else {
      // If no query, navigate to /search with default query and selected country
      navigate(`/search?q=technology&country=${selectedCountry}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          ref={searchRef}
          placeholder="Search news (e.g., GPT, Technology)"
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>

      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="country-select">
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
