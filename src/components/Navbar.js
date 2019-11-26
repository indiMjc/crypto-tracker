/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../actions";

const Navbar = props => {
  const dispatch = useDispatch();
  const pageNum = useSelector(state => state.coinPageNum);

  return (
    <div className={props.menuClass}>
      <Link to="/exchangeData">View Exchange Data</Link>
      <Link onClick={() => dispatch(getCoins(pageNum))} to="/top50coins">
        View Coin Data
      </Link>
    </div>
  );
};

export default Navbar;
