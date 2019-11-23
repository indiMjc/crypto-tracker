import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const CoinModal = props => {
  const filtered = {
    backgroundImage: `url(${props.coin.image})`
  };
  return (
    <section className="coin-modal" id={props.visClass}>
      <section className="modal-header">
        <div className="coin-img" style={filtered}>
          <p>{props.coin.symbol}</p>
        </div>
        <section className="coin-info">
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
                <td>${props.coin.total_volume}</td>
                <td>${props.coin.high_24h}</td>
                <td>${props.coin.low_24h}</td>
                <td>{props.coin.price_change_24h}</td>
                <td>{props.coin.price_change_percentage_24h}%</td>
                <td>{props.coin.market_cap_change_24h}</td>
                <td>{props.coin.market_cap_change_percentage_24h}%</td>
                <td>
                  {props.coin.circulating_supply}
                  {props.coin.symbol}
                </td>
                <td>{props.coin.total_supply}</td>
                <td>{props.coin.ath}</td>
                <td>{props.coin.ath_change_percentage}</td>
                <td>{props.coin.ath_date}</td>
                <td>{props.coin.last_updated}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <FontAwesomeIcon
          icon={faWindowClose}
          style={{ color: "red", cursor: "pointer" }}
          size="4x"
          onClick={() => props.showThisCoin()}
        />
      </section>
    </section>
  );
};

export default CoinModal;
