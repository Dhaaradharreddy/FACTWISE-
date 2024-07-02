import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
const circle = () => {
  return <></>;
};
const App = () => {
  return (
    <>
      <div className="main">
        <h1 className="title">TIC-TAC-TOE</h1>
        <h3 className="result">Start game!</h3>
        <div className="game">
          <div className="row1">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <div className="row2">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          <div className="row2">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
        <button>Reset</button>
      </div>
    </>
  );
};

export default App;
