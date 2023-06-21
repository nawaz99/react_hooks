import React, { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card text-white bg-primary mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">useState Hook {count}</h5>
        <p className="card-text">
          When state value updates component rerender and it will display
          updated value
        </p>
        <button
          className="btn btn-sm btn-success"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment +
        </button>

        <button
          className="btn btn-sm btn-secondary mx-2"
          onClick={() => {
            if (count !== 0) {
              setCount((prev) => {
                return prev - 1;
              });
            }
          }}
        >
          Decrement -
        </button>
      </div>
    </div>
  );
};

export default StateHook;
