import React from 'react'
import './searchResultList.css'


export const searchResultList = ({results, printCandleStickChart}) => {

    return (
        <div className="results-list">
            {results.map((stock, index) => (
                <div key={index} 
                     className='search-result'
                     onClick={(e) => printCandleStickChart(stock.symbol)}
                >
                    {stock.symbol}
                </div>
            ))}
        </div>
    )
}

export default searchResultList
