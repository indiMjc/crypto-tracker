import React, { useState } from "react";
import { useSelector } from "react-redux";
import Coin from "./Coin";

const Top50Coins = () => {
  const [vis, setVis] = useState(false);
  const coins = useSelector(state => state.coinData);

  return (
    <div id="coin-card-container">
      {coins.map(coin => (
        <Coin coin={coin} key={coin.id} vis={vis} toggleVis={setVis} />
      ))}
    </div>
  );
};

export default Top50Coins;
