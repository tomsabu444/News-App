import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NewsFeed from "./components/NewsFeed";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route
              path="/india"
              element={<NewsFeed country="in" defaultQuery="technology" />}
            />
            <Route path="/search" element={<NewsFeed />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
