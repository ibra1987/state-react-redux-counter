import { useSelector } from "react-redux";
import "./history.css";

const History = () => {
  const history = useSelector((state) => state.history);
  console.log(history);
  return (
    <div className="history">
      <h1>History</h1>
      {history.length > 0 && (
        <div className="cells">
          {history.map((each, index) => {
            return (
              <div className="historyCell" key={index}>
                {" "}
                {each}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History;
