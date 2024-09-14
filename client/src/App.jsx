import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load the components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NewsFeed = lazy(() => import("./components/NewsFeed"));
const Layout = lazy(() => import("./components/Layout"));
const Loading = lazy(() => import("./components/Loading"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/india"
              element={<NewsFeed country="in" defaultQuery="technology" />}
            />
            <Route path="/search" element={<NewsFeed />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
