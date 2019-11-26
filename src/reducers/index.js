import { initialState } from "./initialState";

export const GET_EXCHS = "GET_EXCHANGES";
export const GOT_EXCHS = "GOT_EXCHANGES";
export const GET_EXCHS_ERR = "GET_EXCHANGES_ERR";

export const GET_COINS = "GET_COINS";
export const GOT_COINS = "GOT_COINS";
export const GET_COINS_ERR = "GET_COINS_ERR";

export const NEXT_50 = "NEXT_50";
export const PREVIOUS_50 = "PREVIOUS_50";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS: {
      return {
        ...state,
        gettingCoins: true
      };
    }
    case GOT_COINS: {
      return {
        ...state,
        coinData: action.payload,
        gettingCoins: false
      };
    }
    case GET_COINS_ERR: {
      return {
        ...state,
        gettingCoins: false,
        getCoinErr: action.payload
      };
    }

    case NEXT_50: {
      return {
        ...state,
        coinPageNum: state.coinPageNum + 1
      };
    }
    case PREVIOUS_50: {
      return {
        ...state,
        coinPageNum: state.coinPageNum - 1
      };
    }

    case GET_EXCHS: {
      return {
        ...state,
        gettingExchanges: true
      };
    }
    case GOT_EXCHS: {
      return {
        ...state,
        exchanges: action.payload,
        gettingExchanges: false
      };
    }
    case GET_EXCHS_ERR: {
      return {
        ...state,
        gettingExchanges: false,
        getExchErr: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
