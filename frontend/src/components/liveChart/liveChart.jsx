import React, { useEffect, useState, useRef } from 'react'
import { SearchBar, 
         SearchResultList, 
         CandelStickChart } from '../../components'
import './liveChart.css'
import { fetchStockDataAlphaVantage, 
         fetchStockTwelveDataTimeSeries,
         fetchStockTwelveStocks} 
    from '../../services'


function liveChart() {

    const [stocksList, setStockList] = useState([])
    const [stockDataMeta, setStockDataMeta] = useState([])
    const [stockDataValues, setStockDataValues] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [input, setInput] = useState("")

    
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
    // console.log(searchResults)

    // Function used to draw the CandleStick Chart from the input symbol
    function printCandleStickChart (symbol) {
        fetchStockTwelveDataTimeSeries(symbol).then(data => {
            setStockDataMeta(data[0])
            setStockDataValues(data[1])
            setSearchResults([])
            setInput("")
        })
    }

    return (

        <div>
            {/* The search bar for stock to enter */}
            <div className="search-bar-container">
                <SearchBar stocksList={stocksList} 
                           setSearchResults={setSearchResults} 
                           setInput={setInput} 
                           input={input}
                />
                {searchResults && 
                 searchResults.length > 0 && 
                 <SearchResultList results={searchResults} 
                                   printCandleStickChart={printCandleStickChart}
                 />}
            </div>
            
            
            {/* Draw the chart */}
            <h1>Chart Page is here for {stockDataMeta.symbol}</h1>
            <CandelStickChart stockValues={stockDataValues}/>
        </div>
    )
}

export default liveChart

