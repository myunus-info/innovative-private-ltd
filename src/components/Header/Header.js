import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/auth-context";
import { CartIcon } from "../icons/icons";
import { CartContext } from "../contexts/cart-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const cartIconStyles = {
    position: "absolute",
    top: "3px",
    right: "0",
    backgroundColor: "#33c24d",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: ".5rem",
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0033b5" }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Innovative Private Ltd.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!authCtx.isLoggedIn ? (
              <li className="nav-item d-flex align-items-center text-white" style={{ cursor: "pointer" }}>
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Login
                </Link>
              </li>
            ) : (
              <li
                onClick={authCtx.logout}
                className="nav-item d-flex align-items-center text-white "
                style={{ cursor: "pointer" }}
              >
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Logout
                </Link>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li
                className="nav-item d-flex align-items-center ms-3 text-white"
                style={{ cursor: "pointer" }}
              >
                <Link className="nav-link text-white">{authCtx.user.username}</Link>
              </li>
            )}
            <li
              className="nav-item d-flex align-items-center ms-3 text-white"
              style={{ cursor: "pointer", position: "relative" }}
            >
              <Link className="nav-link text-white" to="/cart">
                <CartIcon width="30px" />
                {cartItems.length > 0 ? <span style={cartIconStyles}>{cartItems.length}</span> : null}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
