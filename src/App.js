import React from "react";
import { Route } from "react-router-dom";
import TopTenExchanges from "./components/exchanges/TopTenExchanges";
import ExchangeData from "./components/exchanges/ExchangeData";
import Top50Coins from "./components/coins/Top50Coins";
import "./App.css";
import Navbar from "./components/Navbar";
import Hamburger from "./images/Hamburger";

function App() {
  return (
    <div className="App">
      <Hamburger />
      <Navbar />

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
