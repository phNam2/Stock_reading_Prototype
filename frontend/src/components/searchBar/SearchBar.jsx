import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

export const SearchBar = (stocksList) => {
    const [input, setInput] = useState("")
    
    function filteringData(value) {
        const filteredData = stocksList.stocksList.filter( (stock) => {
            return (value &&
                    stock &&
                    (stock.name.includes(value) ||
                    stock.name.toLowerCase().includes(value) ||
                    stock.symbol.includes(value) ||  
                    stock.symbol.toLowerCase().includes(value)))
        })
        console.log(filteredData)
    }


    const handleChange = (value) => {
        setInput(value);
        filteringData(value);
    }

    return (
        <div className='input-wrapper'>
            <FaSearch id="search-icon"/>
            <input placeholder='Type stock symbol...' 
                   value={input} 
                   onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar