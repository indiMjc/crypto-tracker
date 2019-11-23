import React from "react";
import { useDispatch } from "react-redux";
import { getCoins } from "../../actions";

const CoinData = props => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(getCoins(props))}>
        get top 50 coins
      </button>
    </>
  );
};

export default CoinData;
