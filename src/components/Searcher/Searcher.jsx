import "./Searcher.css"
import React from 'react'

const Searcher = ({ search, handleSearcher }) => {
  return (
    <div>
      <div className="containerInput">
        <img className="back" src="../../assets/img/logo/back.png" alt="back"></img>
        <input
          type="text"
          className="inputBuscar"
          value={search}
          placeholder="     Buscar"
          onChange={handleSearcher}
        />
        <img className="back" src="../../assets/img/logo/filtro.png" alt="filter"></img>
      </div>
    </div>
  )
}

export default Searcher
