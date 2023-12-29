import React, { createContext, useEffect, useState } from "react";
import useHttp from "../hook/useHttp";

export const ProductContext = createContext({
  products: [],
  isLoading: false,
  error: "",
  changedPrice: "",
  getSearchTerm: term => {},
  getChangedPrice: price => {},
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { sendRequest, isLoading, error } = useHttp();
  const [searchTerm, setSearchTerm] = useState("");
  const [changedPrice, setChangedPrice] = useState("");

  useEffect(() => {
    const getProducts = data => {
      if (searchTerm) {
        const filteredProducts = data?.products.filter(product => {
          return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setProducts(filteredProducts);
      } else {
        setProducts(data?.products);
      }
    };

    sendRequest({ url: "https://dummyjson.com/products" }, getProducts);
  }, [sendRequest, searchTerm]);

  const getSearchTerm = term => setSearchTerm(term);
  const getChangedPrice = price => setChangedPrice(price);

  const contextValue = {
    products,
    isLoading,
    error,
    changedPrice,
    getSearchTerm,
    getChangedPrice,
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
