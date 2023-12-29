export const itemsInCart = (cartItems, product) => {
  return cartItems.find((item) => item.id === product.id);
};
