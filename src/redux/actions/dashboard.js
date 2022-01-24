import axios from "axios"
import {createAction} from '@reduxjs/toolkit'
import {APPLE_URL, DIA_URL, SPY_URL} from "../../api/api";

export const setAppleStock = createAction("SET_APPLE_STOCK")
export const setDIAStock = createAction("SET_DIA_STOCK")
export const setSPYStock = createAction("SET_SPY_STOCK")


export const getAppleStock = () => {
    return dispatch => {
        let data = {}
        axios(APPLE_URL).then(res => {
            data = {...res.data}
            data.results.map(item => {
                item.date = new Date(item.t).toDateString()
            })
            dispatch(setAppleStock(data))

        })
    }
}

export const getDIAStock = () => {
    return dispatch => {
        let data = {}
        axios(DIA_URL).then(res => {
            data = {...res.data}
            data.results.map(item => {
                item.date = new Date(item.t).toDateString()
            })
            dispatch(setDIAStock(data))
        })
    }
}


export const getSPYStock = () => {
    return dispatch => {
        let data = {}
        axios(SPY_URL).then(res => {
            data = {...res.data}
            data.results.map(item => {
                item.date = new Date(item.t).toDateString()
            })
            dispatch(setSPYStock(data))
        })
    }
}
