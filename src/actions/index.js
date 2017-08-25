export const addToCart = item => {
  return {
    action: 'ADD_TO_CART',
    item
  }
};

export const removeFromCart = article => {
  return {
    action: 'REMOVE_FROM_CART',
    article
  }
};