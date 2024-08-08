import React from 'react'
import './searchResultList.css'


export const searchResultList = ({results}) => {

    return (
        <div className="results-list">
            {results.map((stock, index) => (
                <div key={index}>{stock.symbol}</div>
            ))}
        </div>
    )
}

export default searchResultList
