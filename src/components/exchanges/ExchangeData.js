import React from "react";
import { useDispatch } from "react-redux";
import { getExchs } from "../../actions";

const ExchangeData = props => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={e => dispatch(getExchs(props))}>
        get top 10 exchanges
      </button>
    </>
  );
};

export default ExchangeData;
