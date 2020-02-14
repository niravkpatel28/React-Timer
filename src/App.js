import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Timer from "../src/components/common/Timer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer name="Timer App" />
        <h1> Change made in sandbox</h1>
      </header>
    </div>
  );
}

export default App;
