import React, { useState } from "react";
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
    <section className={`coin-card ${visClass}`} onClick={() => showThisCoin()}>
      <div className="coin-img" style={filtered}>
        <p>{props.coin.symbol}</p>
      </div>
      <section className="coin-info">
        {vis && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Spot price</th>
                <th>Market cap</th>
                <th>Market cap rank</th>
                <th>24hr volume</th>
                <th>24hr high</th>
                <th>24hr low</th>
                <th>24hr change, total</th>
                <th>24hr change, percentage</th>
                <th>24hr market cap change, total</th>
                <th>24hr market cap change, percentage</th>
                <th>Circulating supply</th>
                <th>Total supply</th>
                <th>All time high</th>
                <th>Change from all time high</th>
                <th>All time high date</th>
                <th>Last updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.coin.name}</td>
                <td>{props.coin.symbol}</td>
                <td>${props.coin.current_price}</td>
                <td>${props.coin.market_cap}</td>
                <td>{props.coin.market_cap_rank}</td>
                <td>{props.coin.total_volume}</td>
                <td>{props.coin.high_24h}</td>
                <td>{props.coin.low_24h}</td>
                <td>{props.coin.price_change_24h}</td>
                <td>{props.coin.price_change_percentage_24h}</td>
                <td>{props.coin.market_cap_change_24h}</td>
                <td>{props.coin.market_cap_change_percentage_24h}</td>
                <td>{props.coin.circulating_supply}</td>
                <td>{props.coin.total_supply}</td>
                <td>{props.coin.ath}</td>
                <td>{props.coin.ath_change_percentage}</td>
                <td>{props.coin.ath_date}</td>
                <td>{props.coin.last_updated}</td>
              </tr>
            </tbody>
          </table>

          // <table>
          //   <tr>
          //     <td>{props.coin.name}</td>
          //     <td>Symbol: {props.coin.symbol}</td>
          //     <td>Current price: ${props.coin.current_price}</td>
          //     <td>Market cap: ${props.coin.market_cap}</td>
          //     <td>Market cap rank: {props.coin.market_cap_rank}</td>
          //     <td>24hr volume: {props.coin.total_volume}</td>
          //     <td>24hr high: {props.coin.high_24}</td>
          //     <td>24hr low: {props.coin.low_24}</td>
          //     <td>24hr price change: {props.coin.price_change_24}</td>
          //     <td>
          //       Price change percentage:{" "}
          //       {props.coin.price_change_percentage_24h}
          //     </td>
          //   </tr>
          //   <tr>
          //     <td>Market cap change: {props.coin.market_cap_change_24h}</td>
          //     <td>
          //       Market cap change percentage:{" "}
          //       {props.coin.market_cap_change_percentage_24h}
          //     </td>
          //     <td>Circulating supply: {props.coin.circulating_supply}</td>
          //     <td>Total supply: {props.coin.total_supply}</td>
          //     <td>All time high: {props.coin.ath}</td>
          //     <td>
          //       All time high change percentage:{" "}
          //       {props.coin.ath_change_percentage}
          //     </td>
          //     <td>All time high date: {props.coin.ath_date}</td>
          //     <td>Last updated: {props.coin.last_updated}</td>
          //   </tr>
          // </table>
          //   <>
          //     <h1>{props.coin.name}</h1>
          //     <p>Symbol: {props.coin.symbol}</p>
          //     <p>Current price: ${props.coin.current_price}</p>
          //     <p>Market cap: ${props.coin.market_cap}</p>
          //     <p>Market cap rank: {props.coin.market_cap_rank}</p>
          //     <p>24hr volume: {props.coin.total_volume}</p>
          //     <p>24hr high: {props.coin.high_24}</p>
          //     <p>24hr low: {props.coin.low_24}</p>
          //     <p>24hr price change: {props.coin.price_change_24}</p>
          //     <p>
          //       Price change percentage: {props.coin.price_change_percentage_24h}
          //     </p>
          //     <p>Market cap change: {props.coin.market_cap_change_24h}</p>
          //     <p>
          //       Market cap change percentage:{" "}
          //       {props.coin.market_cap_change_percentage_24h}
          //     </p>
          //     <p>Circulating supply: {props.coin.circulating_supply}</p>
          //     <p>Total supply: {props.coin.total_supply}</p>
          //     <p>All time high: {props.coin.total_supply}</p>
          //     <p>
          //       All time high change percentage:{" "}
          //       {props.coin.ath_change_percentage}
          //     </p>
          //     <p>All time high date: {props.coin.ath_date}</p>
          //     <p>Last updated: {props.coin.last_updated}</p>
          //   </>
        )}
      </section>
    </section>
  );
};

export default Coin;
