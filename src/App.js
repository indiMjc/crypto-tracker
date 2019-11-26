import React, { useState } from "react";
import { Route } from "react-router-dom";
import TopTenExchanges from "./components/exchanges/TopTenExchanges";
import ExchangeData from "./components/exchanges/ExchangeData";
import Top50Coins from "./components/coins/Top50Coins";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hamburger from "./images/Hamburger";

function App() {
  const [menuClass, setMenuClass] = useState("closed");

  const menuClick = () => {
    const css = menuClass === "closed" ? "opened" : "closed";
    setMenuClass(css);
  };

  const fieldClick = () =>
    menuClass === "opened" ? setMenuClass("closed") : null;

  return (
    <div className="App" onClick={fieldClick}>
      <Hamburger menuClick={menuClick} />
      <Navbar menuClass={menuClass} />

      <Route
        path="/exchangeData"
        render={props => <ExchangeData {...props} />}
      />
      <Route
        path="/topTenExchanges"
        render={props => <TopTenExchanges {...props} />}
      />
      <Route path="/top50coins" render={props => <Top50Coins {...props} />} />
    </div>
  );
}

export default App;
