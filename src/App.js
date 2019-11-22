import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCoins, getExchs } from "./actions/";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>test</h1>
      <button onClick={() => dispatch(getExchs())}>get top 10 exchanges</button>
      <button onClick={() => dispatch(getCoins())}>get top 100 coins</button>
    </div>
  );
}

export default App;
