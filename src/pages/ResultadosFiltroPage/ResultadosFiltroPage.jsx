import Gallery from "../../components/Gallery/Gallery"
import Searcher from "../../components/Searcher/Searcher"
import "./ResultadosFiltroPage.css"

import React from 'react'

const ResultadosFiltroPage = () => {
  return (
    <div className="Container">
      <Searcher></Searcher>
        <Gallery></Gallery>
    </div>
  )
}

export default ResultadosFiltroPage
