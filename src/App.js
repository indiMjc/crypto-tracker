import React, { useState } from "react";
import { Route } from "react-router-dom";
import TopTenExchanges from "./components/exchanges/TopTenExchanges";
import ExchangeData from "./components/exchanges/ExchangeData";
import Top50Coins from "./components/coins/Top50Coins";
import "./App.css";
import Navbar from "./components/Navbar";
import Hamburger from "./images/Hamburger";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("closed");

  const fieldClick = () =>
    menuClass === "opened" ? setMenuClass("closed") : null;

  return (
    <div className="App" onClick={fieldClick}>
      <Hamburger
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuClass={menuClass}
        setMenuClass={setMenuClass}
      />
      <div className="menu" id={menuClass}>
        <Navbar />
      </div>

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
