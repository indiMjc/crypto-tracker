import axios from "axios";

import {
  GET_EXCHS,
  GOT_EXCHS,
  GET_EXCHS_ERR,
  GET_COINS,
  GOT_COINS,
  GET_COINS_ERR
} from "../reducers/";

export const getExchs = props => dispatch => {
  dispatch({ type: GET_EXCHS });

  axios
    .get(`https://api.coingecko.com/api/v3/exchanges?per_page=10`)
    .then(res => {
      dispatch({ type: GOT_EXCHS, payload: res.data });
      props.history.push("/topTenExchanges");
    })
    .catch(err => dispatch({ type: GET_EXCHS_ERR, payload: err }));
};

export const getCoins = props => dispatch => {
  dispatch({ type: GET_COINS });

  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`
    )
    .then(res => {
      console.log(res);
      dispatch({ type: GOT_COINS, payload: res.data });
      props.history.push("/top50coins");
    })
    .catch(err => dispatch({ type: GET_COINS_ERR, payload: err }));
};

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
