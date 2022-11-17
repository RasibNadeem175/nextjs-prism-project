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
    <div className="container">
      <div className="searchbar">
        <input type="text" placeholder = {placeholder} onChange={handleFilter}/>
        <div className='searchIcon'><SearchIcon/></div>
      </div>
      {filteredData.length != 0 && (<div className='dataResult'>
          {filteredData.slice(0.15).map((value, key) => {
              return (<a className="dataItem" href={value.link} target="_blank"><p>{value.title}</p> </a>)})}
    </div>)}
        <style jsx>{`

          .searchbar {
            display: flex;
            box-sizing: border-box;
          }

          .container input {
            background-color: white;
            border: 0;
            width:100vw;
            border-radius: 2px;
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
            font-size: 18px;

          }

          .searchIcon {
            height: 30px;
            width: 50px;
            background-color: white;
            display: grid;
            place-items: center;
          }

          input:focus {
            outline: none;
          }
          .searchIcon svg {
            font-size: 35px;
          }

          .dataResult {
            margin-top: 5px;
            width: 100%;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            overflow: hidden;
            overflow-y: auto;
          }

          .dataResult::-webkit-scrollbar {
            display: none;
          }

          .dataResult .dataItem {
            width: inherit;
            display: flex;
            align-items: center;
            color: black;
          }

          .dataItem p {
            margin-left: 10px;
          }
          a {
            text-decoration: none;
          }

          a:hover {
            background-color: lightgrey;
          }

          #clearBtn {
            cursor: pointer;
          }`
        }</style>
    </div>    
  )
}


export default SearchBar