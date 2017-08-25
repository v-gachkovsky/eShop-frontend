const cart = (state = [], action) => {
  console.log('action', action);
  switch(action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        action.payload
      ];
    case 'REMOVE_FROM_CART':
      let newState = [...state];
      newState.splice(action.payload, 1);
      return [
        ...newState
      ];
    default:
      return state;
  }
};

export default cart;