import React, { useEffect, useState, useRef } from 'react'
import { fetchStockDataPolygon, 
         fetchStockDataAlphaVantage, 
         fetchAllTickerPolygon,
         fetchAllExchangePolygon,
         fetchStockAggregatesPolygon,
         fetchStockTwelveDataTimeSeries} 
    from '../../services'


function liveChart({symbol}) {

    const [stockData, setStockData] = useState(null)
    var effectRan = useRef(false) // prevent the API calling many times

    useEffect(() => {
        if (effectRan.current===false){
            fetchStockTwelveDataTimeSeries(symbol).then(data =>
                setStockData(data)
            )
            // fetchAllTickerPolygon().then(data =>
            //     setStockData(data)
            // )
        }
        return () => {
            console.log("unmounted")
            effectRan = true
        }
    }, [])
    console.log(stockData)


    return (
        <h1>Live Chart is here</h1>
    )
}

export default liveChart

