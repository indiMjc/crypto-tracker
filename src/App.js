import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { getCoins, getExchs } from "./actions/";
import "./App.css";
import TopTenExchanges from "./components/exchanges/TopTenExchanges";
import ExchangeData from "./components/exchanges/ExchangeData";
import CoinData from "./components/coins/CoinData";
import Top50Coins from "./components/coins/Top50Coins";

function App() {
  return (
    <div className="App">
      <Link to="/exchangeData">View Exchange Data</Link>
      <Link to="/coinData">View Coin Data</Link>

      <Route
        path="/exchangeData"
        render={props => <ExchangeData {...props} />}
      />
      <Route
        path="/topTenExchanges"
        render={props => <TopTenExchanges {...props} />}
      />
      <Route path="/coinData" render={props => <CoinData {...props} />} />
      <Route path="/top50coins" render={props => <Top50Coins {...props} />} />
    </div>
  );
}

export default App;
