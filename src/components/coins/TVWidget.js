import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const TVWidget = props => {
  return (
    <TradingViewWidget
      symbol={`${props.ticker}usd`}
      theme={Themes.DARK}
      autosize
    />
  );
};

export default TVWidget;
