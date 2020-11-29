import React, { useEffect, useState } from 'react';
// import Wrapper from "../components/Wrapper"
import api from "./API"

function Search(){

  const [query, setQuery] = useState('')
  const [hourly, setHourly] = useState({})


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}key=${api.key}&q=${query}&days=3`)
        .then(res => res.json())
        .then(result => {
          setQuery('')
          setHourly(result)
          console.log(result)
        })
    }
  }

  return(
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>

  )
}

export default Search;