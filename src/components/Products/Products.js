import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import { ProductContext } from "../contexts/products-context";

const Products = () => {
  const productsCtx = useContext(ProductContext);
  const { products } = productsCtx;
  const { changedPrice } = useContext(ProductContext);

  let sortedProducts;
  if (changedPrice === "Price Low to High") {
    sortedProducts = products.sort((a, b) => a.price - b.price);
  } else if (changedPrice === "Price High to Low") {
    sortedProducts = products.sort((a, b) => b.price - a.price);
  } else {
    sortedProducts = products;
  }

  return (
    <div className="row mt-3">
      {sortedProducts.map(product => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
