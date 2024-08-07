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
    console.log(stockDataValues)


    return (

        <div>
            <h1>Chart Page is here</h1>

            {/* <ul>
                {stockDataValues.map((item, index) => (
                    <h1>{item.open}</h1>
                ))}
            </ul> */}


            <CandelStickChart/>
        </div>
        
        // <h1>{stockData[0].close}</h1>
    )
}

export default liveChart

