import {createReducer} from "@reduxjs/toolkit";
import {setLoading, setTicker} from "../actions/tickers";

export const tickers = createReducer({}, {
    [setTicker]: (state, {payload}) => payload
})

export const loading = createReducer(false, {
    [setLoading]: (state, {payload}) => payload
})
