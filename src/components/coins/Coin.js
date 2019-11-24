import React, { useState } from "react";
import CoinModal from "./CoinModal";
import "./Coin.css";

const Coin = props => {
  const [vis, setVis] = useState(false);
  const [visClass, setVisClass] = useState("collapsed");

  const showThisCoin = () => {
    const css = visClass === "collapsed" ? "expanded" : "collapsed";
    setVis(!vis);
    setVisClass(css);
  };

  const filtered = {
    backgroundImage: `url(${props.coin.image})`
  };

  return (
    <section className="coin-card">
      <div className="coin-img" style={filtered} onClick={() => showThisCoin()}>
        <p>{props.coin.symbol}</p>
      </div>
      {vis && (
        <CoinModal
          coin={props.coin}
          visClass={visClass}
          showThisCoin={showThisCoin}
        />
      )}
    </section>
  );
};

export default Coin;
