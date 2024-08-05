const ALPHAVANTAGE_API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API
const POLYGON_API_KEY= import.meta.env.VITE_POLYGON_API
const TWELVEDATA_API_KEY = import.meta.env.VITE_TWELVEDATA_API
import axios from "axios"

import { tsvParse, csvParse } from  "d3-dsv"
import { timeParse } from "d3-time-format"

/** 
 * The fetching functions for Alpha Advantage
 */
export const fetchStockDataAlphaVantage = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`)
    const data = await response.json()
    return data
}


/** 
 * The fetching functions for Polygon
 */ 
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


/**
 * The fetching functions for Twelve Data
 */
export const fetchStockTwelveDataTimeSeries = async (symbol) => {
    const response = await axios.get(`https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1week&start_date=2019-08-09&end_date=2021-08-12&apikey=${TWELVEDATA_API_KEY}`)
    return response.data.values
}

/**
 * The tetching function from the Stock React tét
 */
function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export const getDataTest = async () => {
	const promiseMSFT = await fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, parseData(parseDate)))
    console.log("Done")
	return promiseMSFT;
}