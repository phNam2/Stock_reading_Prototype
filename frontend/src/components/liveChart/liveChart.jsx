import React, { useEffect, useMemo, useState } from 'react'
import { fetchStockDataPolygon } from '../../services'


function liveChart({symbol}) {

    const [stockData, setStockData] = useState({})

    useEffect(() => {
        fetchStockDataPolygon(symbol).then(data =>
            setStockData(data)
        )
    }, [])

    console.log(stockData)
    

    return (
        <h1>Live Chart is here</h1>
    )
}

export default liveChart

