import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCoins } from "../actions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Link to="/exchangeData">View Exchange Data</Link>
      <Link onClick={() => dispatch(getCoins())} to="/top50coins">
        View Coin Data
      </Link>
    </>
  );
};

export default Navbar;
