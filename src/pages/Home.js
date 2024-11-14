import React from "react";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div>
      <h1 className="display-flex, justify-content-center">Product Showcase</h1>
      <ProductList />
    </div>
  );
}

export default Home;
