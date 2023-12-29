import { createContext, useReducer } from "react";
import cartReducer, { sumCartItems } from "./cart-reducer";

export const CartContext = createContext({
  cartItems: [],
  itemCount: 0,
  total: 0,
  addProduct: product => {},
  removeProduct: product => {},
  increase: product => {},
  decrease: product => {},
  clearCart: product => {},
});

const CartContextProvider = ({ children }) => {
  const cartFromStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

  const initialState = {
    cartItems: cartFromStorage,
    ...sumCartItems(cartFromStorage),
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = product => dispatch({ type: "ADD_ITEM", payload: product });
  const removeProduct = product => dispatch({ type: "REMOVE_ITEM", payload: product });
  const increase = product => dispatch({ type: "INCREASE", payload: product });
  const decrease = product => dispatch({ type: "DECREASE", payload: product });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const contextValue = {
    ...state,
    addProduct,
    removeProduct,
    increase,
    decrease,
    clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
