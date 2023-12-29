import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../contexts/cart-context";
import { useNavigate } from "react-router-dom";
import { itemsInCart } from "../../helpers/helpers";

const SingleProduct = ({ product }) => {
  const { brand, category, description, price, rating, stock, thumbnail, title } = product || {};

  const navigate = useNavigate();

  const { addProduct, cartItems } = useContext(CartContext);

  const isInCart = itemsInCart(cartItems, product);
  const addProductHandler = product => {
    addProduct(product);
    toast.success("Product added to the cart!");
  };

  return (
    <div className="col-md-4 col-lg-3">
      <div
        className="card"
        style={{
          padding: "1rem",
          margin: "1rem 0",
          boxShadow: "-2px 1px 5px rgba(0, 0, 0, 0.2)",
          border: "none",
        }}
      >
        <img
          style={{ width: "100%", height: "150px" }}
          src={thumbnail}
          className="card-img-top"
          alt="product"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>Brand: {brand}</p>
          <p>
            <strong>Price: {price}</strong>
          </p>
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <p>Stock: {stock}</p>
          <p className="card-text">{description}</p>
          {!isInCart ? (
            <button className="btn btn-primary" onClick={() => addProductHandler(product)}>
              Add to cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => navigate("/cart")}>
              Go to cart
            </button>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
