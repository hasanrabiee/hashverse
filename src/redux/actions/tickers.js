import axios from "axios";
import {API_KEY, GET_TICKER_URL} from "../../api/api";
import {createAction} from "@reduxjs/toolkit";

export const setTicker = createAction("SET_TICKER")
export const setLoading = createAction("SET_LOADING")

export const getTicker = (ticker, from, to) => {
    return dispatch => {
        dispatch(setLoading(true))
        axios(GET_TICKER_URL(ticker, from, to, API_KEY)).then(response=>{
            console.log(response.data)
            dispatch(setTicker(response.data))
        }).finally(()=>dispatch(setLoading(false)))
    }
}
