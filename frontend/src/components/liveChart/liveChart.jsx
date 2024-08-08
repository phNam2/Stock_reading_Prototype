import React, { useEffect, useState, useRef } from 'react'
import { CandelStickChart } from '../../components'
import { SearchBar } from '../../components'
import './liveChart.css'
import { fetchStockDataAlphaVantage, 
         fetchStockTwelveDataTimeSeries,
         fetchStockTwelveStocks} 
    from '../../services'


function liveChart() {

    const [stocksList, setStockList] = useState([])
    const [stockDataMeta, setStockDataMeta] = useState([])
    const [stockDataValues, setStockDataValues] = useState([])

    
    var effectRan = useRef(false) // prevent the API calling many times
    useEffect(() => {
        if (effectRan.current===false){
            fetchStockTwelveStocks().then (data => 
                setStockList(data)
            )
        }
        return () => {
            console.log("unmounted")
            effectRan = true
        }
    }, [])
    console.log(stocksList)

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

            <div className="search-bar-container">
                <SearchBar stocksList={stocksList}/>
            </div>
            {/* <ul>
                {stocksList.map((stock, index) => (
                    <i id={index}>{stock.symbol}</i>
                ))}
            </ul> */}
            <CandelStickChart stockValues={stockDataValues}/>
        </div>
    )
}

export default liveChart

