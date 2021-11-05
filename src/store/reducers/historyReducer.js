const reducer = (state = [], action, root) => {
  switch (action.type) {
    case "INCREMENT":
      return [root.counter, ...state];

    case "DECREMENT":
      return [root.counter, ...state];

    default:
      return state;
  }
};

export default reducer;
