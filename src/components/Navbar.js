import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const pageNum = useSelector(state => state.coinPageNum);

  return (
    <>
      <Link to="/exchangeData">View Exchange Data</Link>
      <Link onClick={() => dispatch(getCoins(pageNum))} to="/top50coins">
        View Coin Data
      </Link>
    </>
  );
};

export default Navbar;
