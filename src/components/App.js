import "../styles/App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import StateHook from "./StateHook";

function App() {
  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-sm">
          <StateHook />
        </div>
      </div>
    </div>
  );
}

export default App;
