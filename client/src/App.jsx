import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* Pass country='in' to NewsFeed for India news */}
          <Route
            path="/india"
            element={<NewsFeed country="in" defaultQuery="technology" />}
          />
          {/* Route for search */}
          <Route path="/search" element={<NewsFeed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
