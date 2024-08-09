import React, { useEffect, useState, useRef } from 'react'
import { CandelStickChart } from '../../components'
import { fetchStockDataAlphaVantage, 
         fetchStockTwelveDataTimeSeries} 
    from '../../services'


function liveChart({symbol}) {

    const [stockDataMeta, setStockDataMeta] = useState([])
    const [stockDataValues, setStockDataValues] = useState([])
    var effectRan = useRef(false) // prevent the API calling many times

    useEffect(() => {
        if (effectRan.current===false){
            fetchStockTwelveDataTimeSeries(symbol).then(data => {
                setStockDataMeta(data[0])
                setStockDataValues(data[1])
            })
        }
        return () => {
            console.log("unmounted")
            effectRan = true
        }
    }, [])
    console.log(stockDataMeta)


    return (

        <div>
            <h1>Chart Page is here for {stockDataMeta.symbol}</h1>
            <CandelStickChart stockValues={stockDataValues}/>
        </div>
    )
}

export default liveChart

