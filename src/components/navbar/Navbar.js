/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../actions";
import "./navbar.css";

const Navbar = props => {
  const dispatch = useDispatch();
  const pageNum = useSelector(state => state.coinPageNum);

  return (
    <div className={props.menuClass}>
      <Link to="/exchangeData">View Exchange Data</Link>
      <Link
        onClick={() => dispatch(getCoins())}
        to="/coins"
        className="button-link"
      >
        <div className="button-container">
          <div className="span-parent">
            <span />
            <span />
            <span />
            <span />
            <div className="button-filter">
              <div className="button-text">Coin Data</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
