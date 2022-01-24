import {combineReducers} from "redux";
import {appleStock, DIAStock, SPYStock} from "./dashboard";
import {loading, tickers} from "./tickers";

export default combineReducers({
    appleStock,
    DIAStock,
    SPYStock,
    tickers,
    loading
})
