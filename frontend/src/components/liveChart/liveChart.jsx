import React, { useEffect, useMemo, useState } from 'react'
import { fetchStockData } from '../../services'


function liveChart({symbol}) {

    const [stockData, setStockData] = useState({})

    useEffect(() => {
        fetchStockData(symbol).then(data =>
            setStockData(data)
        )
    }, [])

    console.log(stockData["Weekly Adjusted Time Series"])
    // const list_date = stockData["Weekly Adjusted Time Series"]
    // console.log(list_date)


    return (
        <h1>Live Chart is here</h1>
    )
}

export default liveChart

