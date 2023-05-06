import Gallery from "../../components/Gallery/Gallery"
import Searcher from "../../components/Searcher/Searcher"
import "./ResultadosFiltroPage.scss"

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
