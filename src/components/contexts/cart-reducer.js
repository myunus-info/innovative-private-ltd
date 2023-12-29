const storeCartItems = cartItems => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const sumCartItems = cartItems => {
  storeCartItems(cartItems);

  return {
    itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    total: cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCartItems(state.cartItems),
      };

    case "REMOVE_ITEM":
      const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);

      return {
        ...state,
        cartItems: [...newCartItems],
        ...sumCartItems(newCartItems),
      };

    case "INCREASE":
      const increaseProdIdx = state.cartItems.findIndex(item => item.id === action.payload.id);
      const prodWithIdx = state.cartItems[increaseProdIdx];
      if (prodWithIdx) {
        prodWithIdx.quantity += 0.5;
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCartItems(state.cartItems),
      };

    case "DECREASE":
      const decreaseProdIdx = state.cartItems.findIndex(item => item.id === action.payload.id);
      const product = state.cartItems[decreaseProdIdx];
      if (product.quantity > 1) {
        product.quantity -= 0.5;
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumCartItems(state.cartItems),
      };

    case "CLEAR":
      localStorage.removeItem("cart");

      return {
        cartItems: [],
        itemCount: 0,
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
