import React, { useEffect, useState, useRef } from 'react'
import { fetchStockDataPolygon, fetchStockDataAlphaVantage } from '../../services'


function liveChart({symbol}) {

    const [stockData, setStockData] = useState({})
    var effectRan = useRef(false) // prevent the API calling many times

    useEffect(() => {
        if (effectRan.current===false){
            fetchStockDataPolygon(symbol).then(data =>
                setStockData(data)
            )
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

