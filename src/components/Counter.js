import "./counter.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  let inputValue = 0;
  const { increment, decrement } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="counter">
      <button onClick={() => increment(inputValue)}>Increment</button>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => (inputValue = e.target.value)}
      />
      <button onClick={() => decrement(inputValue)}>Decrement</button>
    </div>
  );
};

export default Counter;
