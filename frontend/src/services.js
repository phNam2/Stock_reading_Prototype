const ALPHAVANTAGE_API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API
const TWELVEDATA_API_KEY = import.meta.env.VITE_TWELVEDATA_API
import axios from "axios"

/** 
 * The fetching functions for Alpha Advantage
 */
export const fetchStockDataAlphaVantage = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`)
    const data = await response.json()
    return data
}




/**
 * The fetching functions for Twelve Data
 */
export const fetchStockTwelveDataTimeSeries = async (symbol) => {
    const response = await axios.get(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1week&start_date=2019-08-09&end_date=2021-08-12&apikey=${TWELVEDATA_API_KEY}`)
    return response.data.values
}