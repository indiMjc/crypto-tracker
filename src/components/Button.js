import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <Link to={props.location} className="button-link">
      <div className="button-container">
        <div className="span-parent">
          <span />
          <span />
          <span />
          <span />
          <div className="button-filter">
            <div className="button-text">{props.text}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Button;
