import React, { useContext } from "react";
import Layout from "../Layout/Layout";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/cart-context";

const Cart = () => {
  const { total, cartItems, removeProduct, increase, decrease } = useContext(CartContext);

  return (
    <Layout>
      <div style={{ minHeight: "85vh" }} className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                margin: "2rem 0",
                textAlign: "center",
                borderBottom: "2px solid #f2f2f2",
                paddingBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>Your Cart ({cartItems?.length} items)</h4>{" "}
              <h5 style={{ textAlign: "right", display: "inline-block", marginLeft: "auto" }}>
                Total Amount: ${total}
              </h5>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item(s)</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(product => (
                  <CartItem
                    key={product.id}
                    product={product}
                    removeProduct={removeProduct}
                    increase={increase}
                    decrease={decrease}
                  />
                ))}
                {/* <tr>
                  <td style={{ border: "none" }} />
                  <td style={{ border: "none" }} />
                  <td style={{ border: "none" }} />
                  <td>Total Amount: ${total}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
