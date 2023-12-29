import React from "react";
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "../icons/icons";

const CartItem = ({ product, removeProduct, increase, decrease }) => {
  return (
    <tr>
      <th scope="row" style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{
            width: "4rem",
            height: "4rem",
            marginRight: "1rem",
            borderRadius: ".5rem",
          }}
          src={product.thumbnail}
          alt="product thumbnail"
        />
        <div style={{ lineHeight: ".75rem", marginBottom: "-10px" }}>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            {product.category}
          </p>
          <p>{product.title}</p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            {product.brand}
          </p>
        </div>
      </th>

      <td>${product.price}</td>
      <td>
        <div className="d-flex ">
          <span style={{ cursor: "pointer" }} onClick={() => increase(product)}>
            <PlusCircleIcon width="20px" />
          </span>
          <p
            style={{
              border: "1px solid #555",
              padding: "0 8px",
              margin: "0 8px",
              fontWeight: "500",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            {product.quantity}
          </p>
          {product.quantity === 1 && (
            <span style={{ cursor: "pointer", color: "crimson" }} onClick={() => removeProduct(product)}>
              <TrashIcon width="20px" />
            </span>
          )}
          {product.quantity > 1 && (
            <span style={{ cursor: "pointer" }} onClick={() => decrease(product)}>
              <MinusCircleIcon width="20px" />
            </span>
          )}
        </div>
      </td>
      <td>${product.price * product.quantity}</td>
    </tr>
  );
};

export default CartItem;
