import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}) {

  const [filteredData, setFilteredData] = useState([])
 
  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase()

    if(searchWord === "") {
      setFilteredData("")
    } else {
        const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord);
      });
      setFilteredData(newFilter)
    } 
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder = {placeholder} onChange={handleFilter}/>
        <div className='searchIcon'><SearchIcon/></div>
      </div>

      {filteredData.length != 0 && (<div className='dataResult'>
          {filteredData.slice(0.15).map((value, key) => {
              return (<a className="dataItem" href={value.link} target="_blank"><p>{value.title}</p> </a>)})}
        </div>)}
    </div>    
  )
}


export default SearchBar