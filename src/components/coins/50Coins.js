/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextFiftyCoins, previousFiftyCoins } from "../../actions";
import Coin from "./Coin";

const buttonStyle = css`
  height: 5vh;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.7rem;
  background: radial-gradient(ellipse, white, transparent);
  font-weight: bolder;

  &:hover {
    background: white;
    transition-duration: 0.5s;
    box-shadow: 0 0 15px rgb(255, 255, 255), 0 0 25px rgb(255, 255, 255),
      0 0 35px rgb(255, 255, 255);
  }

  &:focus {
    outline: 0;
  }
`;

const FiftyCoins = props => {
  const [vis, setVis] = useState(false);
  const coins = useSelector(state => state.coinData);
  const page = useSelector(state => state.coinPageNum);
  const loading = useSelector(state => state.gettingCoins);

  const dispatch = useDispatch();

  const disableNext = page <= 1 || loading ? true : false;

  const disablePrevious = page <= 2 || loading ? true : false;

  return (
    <div id="coin-card-container">
      <div className="coin-pagination">
        <button
          css={buttonStyle}
          onClick={() => dispatch(previousFiftyCoins(props, page))}
          disabled={disablePrevious}
        >
          Prev. Page
        </button>
        <button
          css={buttonStyle}
          onClick={() => dispatch(nextFiftyCoins(props, page))}
          disabled={disableNext}
        >
          Next Page
        </button>
      </div>
      <div className="coin-cards">
        {coins.map(coin => (
          <Coin coin={coin} key={coin.id} vis={vis} toggleVis={setVis} />
        ))}
      </div>
    </div>
  );
};

export default FiftyCoins;
