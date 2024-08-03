const ALPHAVANTAGE_API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API
const POLYGON_API_KEY= import.meta.env.VITE_POLYGON_API
const TIINGO_API_KEY= import.meta.env.TIINGO_API_KEY
import axios from "axios"

export const fetchStockDataAlphaVantage = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`)
    const data = await response.json()
    return data
}


export const fetchStockDataPolygon = async (symbol) => {
    const response = await axios.get(`https://api.polygon.io/v1/open-close/${symbol}/2023-01-09?adjusted=true&apiKey=${POLYGON_API_KEY}`)
    return response.data
}


export const fetchAllTickerPolygon = async () => {
    const response = await axios.get(`https://api.polygon.io/v3/reference/tickers?active=true&locale=us&market=stocks&exchange=XNAS&type=CS&order=asc&limit=1000&apiKey=${POLYGON_API_KEY}`)
    // const response = await axios.get(`https://api.polygon.io/v3/reference/tickers?active=true&apiKey=${POLYGON_API_KEY}`)
    return response.data.results
}

export const fetchAllExchangePolygon = async () => {
    const response = await axios.get(`https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=${POLYGON_API_KEY}`)
    return response.data.results
}


export const fetchStockAggregatesPolygon = async (symbol) => {
    const response = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/year/2023-01-09/2024-07-09?adjusted=true&sort=asc&apiKey=${POLYGON_API_KEY}`)
    return response.data
}