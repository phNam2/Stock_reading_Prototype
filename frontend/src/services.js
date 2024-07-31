const ALPHAVANTAGE_API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API
const POLYGON_API_KEY= import.meta.env.VITE_POLYGON_API

export const fetchStockDataAlphaVantage = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`)
    const data = await response.json()
    return data
}


export const fetchStockDataPolygon = async (symbol) => {
    const response = await fetch(`https://api.polygon.io/v1/open-close/${symbol}/2023-01-09?adjusted=true&apiKey=${POLYGON_API_KEY}`)
    const data = await response.json()
    return data
}