import React, { useEffect, useState, useRef } from 'react'
import { CandelStickChart } from '../../components'
import { fetchStockDataAlphaVantage, 
         fetchStockTwelveDataTimeSeries} 
    from '../../services'


function liveChart() {

    const [stockDataMeta, setStockDataMeta] = useState([])
    const [stockDataValues, setStockDataValues] = useState([])

    
    var effectRan = useRef(false) // prevent the API calling many times
    useEffect(() => {
        if (effectRan.current===false){
            
        }
        return () => {
            console.log("unmounted")
            effectRan = true
        }
    }, [])


    // Function used to draw the CandleStick Chart from the input symbol
    function printCandleStickChart (symbol) {
        fetchStockTwelveDataTimeSeries(symbol).then(data => {
            setStockDataMeta(data[0])
            setStockDataValues(data[1])
        })
    }

    return (

        <div>
            <h1>Chart Page is here for {stockDataMeta.symbol}</h1>
            {/* <ul>
                {stockDataValues.map((item, index) => (
                    <h1>{item.open}</h1>
                ))}
            </ul> */}
            <CandelStickChart stockValues={stockDataValues}/>
        </div>
    )
}

export default liveChart

