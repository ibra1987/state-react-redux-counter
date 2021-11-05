import "./Result.css";

import { useSelector } from "react-redux";

const Result = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="result">
      <span>{counter}</span>
    </div>
  );
};

export default Result;
