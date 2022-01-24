export const API_KEY = "ej0m9ZAZcphHH9M4waYC3kPMSJbokkOV"

const generateUrl = (ticker = "AAPL", API_KEY = API_KEY) => {
    return `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2020-06-01/2020-06-17?apiKey=${API_KEY}`
}


export const APPLE_URL = generateUrl("AAPL",API_KEY)
export const DIA_URL = generateUrl("DIA",API_KEY)
export const SPY_URL = generateUrl("SPY",API_KEY)

export const GET_TICKER_URL = (ticker,from,to,API_KEY) => {
    return `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}?apiKey=${API_KEY}`
}
