import "./Searcher.css"
import React from 'react'

const Searcher = ({ search, handleSearcher }) => {
  return (
    <div className="main">
      <div className="containerInput">
        
        <input
          type="text"
          className="inputBuscar"
          value={search}
          placeholder="Buscar"
          onChange={handleSearcher}
        />
       
      </div>
    </div>
  )
}

export default Searcher
