const reducer = (state = 0, action, root) => {
  switch (action.type) {
    case "INCREMENT":
      return state + parseInt(action.payload);
    case "DECREMENT":
      return state - parseInt(action.payload);

    default:
      return state;
  }
};

export default reducer;
