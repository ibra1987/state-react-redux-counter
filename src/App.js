import "./App.css";
import Counter from "./components/Counter";
import History from "./components/History";
import Result from "./components/Result";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Result />
      <Counter />
      <History />
    </div>
  );
}

export default App;
