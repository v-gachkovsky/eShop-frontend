const showcase = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_GOODS':
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
};

export default showcase;