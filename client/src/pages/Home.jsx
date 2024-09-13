import React from "react";

import Layout from "../components/Layout";
import NewsFeed from "../components/NewsFeed";

function Home() {
  return (
    <>
      <Layout>
        <NewsFeed />
      </Layout>
    </>
  );
}

export default Home;
