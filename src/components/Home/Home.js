import React from "react";
import Layout from "../Layout/Layout";
import SearchFilterProducts from "../Products/SearchFilterProducts";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Layout>
      <div className="container" style={{ minHeight: "85vh" }}>
        <SearchFilterProducts />
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
