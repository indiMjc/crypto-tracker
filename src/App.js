import React from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import TopTenExchanges from "./components/exchanges/TopTenExchanges";
import ExchangeData from "./components/exchanges/ExchangeData";
import Top50Coins from "./components/coins/Top50Coins";
import "./App.css";
import { getCoins } from "./actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Link to="/exchangeData">View Exchange Data</Link>
      <Link onClick={() => dispatch(getCoins())} to="/top50coins">
        View Coin Data
      </Link>

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
