/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import CoinModal from "./CoinModal";
import "./Coin.css";

const cardStyle = css`
  display: flex;
  height: 15vh;
  width: 15vh;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(-45deg, rgb(255, 255, 255), rgb(80, 80, 80));
  border-radius: 0.3rem;
  padding: 1vh;
  margin: 2vh 2vh 0;
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(80, 80, 80));
  box-shadow: 1rem 1rem 0.5rem rgba(0, 0, 0, 0.164);
  font-size: 2.6rem;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 0.2rem white, 0 0 0.5rem white, 0 0 0.8rem white,
      0 0 1.5rem white, 0 0 1.8rem white, 0 0 2.1rem white;
  }
`;

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
    <section css={cardStyle}>
      <div className="coin-img" style={filtered} onClick={() => showThisCoin()}>
        <p>{props.coin.symbol}</p>
      </div>
      {vis && (
        <CoinModal
          styles={cardStyle}
          coin={props.coin}
          visClass={visClass}
          showThisCoin={showThisCoin}
        />
      )}
    </section>
  );
};

export default Coin;
