/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextFiftyCoins } from "../../actions";
import Coin from "./Coin";

const buttonStyle = css`
  height: 5vh;
`;

const FiftyCoins = props => {
  const dispatch = useDispatch();
  const [vis, setVis] = useState(false);
  const coins = useSelector(state => state.coinData);
  const page = useSelector(state => state.coinPageNum);

  return (
    <div id="coin-card-container">
      <div className="coin-pagination">
        <button css={buttonStyle}>Prev. Page</button>
        <button
          css={buttonStyle}
          onClick={() => dispatch(nextFiftyCoins(props, page))}
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
