import React, { useEffect, useState, useRef } from 'react'
import { CandelStickChart } from '../../components'
import { fetchStockDataAlphaVantage, 
         fetchStockTwelveDataTimeSeries} 
    from '../../services'


function liveChart({symbol}) {

    const [stockData, setStockData] = useState([])
    var effectRan = useRef(false) // prevent the API calling many times

    useEffect(() => {
        if (effectRan.current===false){
            fetchStockTwelveDataTimeSeries(symbol).then(data =>
                setStockData(data)
            )
            // getDataTest().then(data =>
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

        <div>
            <h1>Chart Page is here</h1>
            <CandelStickChart/>
        </div>
        
        // <h1>{stockData[0].close}</h1>
    )
}

export default liveChart

