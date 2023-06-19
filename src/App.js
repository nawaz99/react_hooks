import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        useState Hooks example
        React Hooks {count}
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment +
        </button>
        <button
          onClick={() => {
            if (count != 0) {
              setCount((prev) => {
                return prev - 1;
              });
            }
          }}
        >
          Decrement -
        </button>
      </header>  
    </div>
  );
}

export default App;
