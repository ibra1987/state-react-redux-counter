import counterReducer from "./counterReducer";
import historyReducer from "./historyReducer";

const rootReducer = (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action, state),
    history: historyReducer(state.history, action, state),
  };
};

export default rootReducer;
