import {createReducer} from "@reduxjs/toolkit"

import {setAppleStock, setDIAStock, setSPYStock} from "../actions/dashboard";

export const appleStock = createReducer([], {
    [setAppleStock]: (state, {payload}) => payload
})

export const DIAStock = createReducer([], {
    [setDIAStock]: (state, {payload}) => payload
})

export const SPYStock = createReducer([], {
    [setSPYStock]: (state, {payload}) => payload
})
