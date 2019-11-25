/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import TVWidget from "./TVWidget";

const CoinModal = props => {
  const filtered = {
    backgroundImage: `url(${props.coin.image})`
  };

  const checkIfPostive = num => (num >= 0 ? "green" : "red");

  return (
    <div>
      <section css={props.styles} id={props.visClass}>
        <section className="modal-header">
          <div className="coin-img" style={filtered}>
            <p>{props.coin.symbol}</p>
          </div>
          <section className="coin-info">
            <div className="tables">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Spot price</th>
                      <th>Market cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.coin.name}</td>
                      <td>{props.coin.symbol.toUpperCase()}</td>
                      <td>${props.coin.current_price}</td>
                      <td>${props.coin.market_cap}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table hide-table">
                <table>
                  <thead>
                    <tr>
                      <th>Market cap rank</th>
                      <th>24hr volume</th>
                      <th>24hr high</th>
                      <th>24hr low</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.coin.market_cap_rank}</td>
                      <td>${props.coin.total_volume}</td>
                      <td>${props.coin.high_24h}</td>
                      <td>${props.coin.low_24h}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table hide-table">
                <table>
                  <thead>
                    <tr>
                      <th>24hr change, total</th>
                      <th>24hr change, percentage</th>
                      <th>24hr market cap change, total</th>
                      <th>24hr market cap change, percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: checkIfPostive(props.coin.price_change_24h)
                        }}
                      >
                        {props.coin.price_change_24h}
                      </td>
                      <td
                        style={{
                          color: checkIfPostive(
                            props.coin.price_change_percentage_24h
                          )
                        }}
                      >
                        {props.coin.price_change_percentage_24h}%
                      </td>
                      <td
                        style={{
                          color: checkIfPostive(
                            props.coin.market_cap_change_24h
                          )
                        }}
                      >
                        {props.coin.market_cap_change_24h}
                      </td>
                      <td
                        style={{
                          color: checkIfPostive(
                            props.coin.market_cap_change_percentage_24h
                          )
                        }}
                      >
                        {props.coin.market_cap_change_percentage_24h}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table hide-table">
                <table>
                  <thead>
                    <tr>
                      <th>Circulating supply</th>
                      <th>Total supply</th>
                      <th>All time high</th>
                      <th>Change from all time high</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {props.coin.circulating_supply}
                        {props.coin.symbol}
                      </td>
                      <td>{props.coin.total_supply}</td>
                      <td>{props.coin.ath}</td>
                      <td style={{ color: checkIfPostive() }}>
                        {props.coin.ath_change_percentage}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <FontAwesomeIcon
            icon={faWindowClose}
            style={{ color: "red", cursor: "pointer" }}
            size="4x"
            onClick={() => props.showThisCoin()}
          />
        </section>
        <TVWidget ticker={props.coin.symbol} />
      </section>
    </div>
  );
};

export default CoinModal;
