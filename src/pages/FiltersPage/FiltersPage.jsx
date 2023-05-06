import React from 'react'
import "./FiltersPage.css"

const FiltersPage = () => {
  return (
    <div className='FiltersContainer'>
    <div className='FiltHeader'>
    <div className='DivTittle'><h1 className='Tittle'>Filtros</h1></div>
    <div className='FiltersBackDiv'><img className='filtersbackIMG' src='/assets/img/logo_seleccionado/X.png' alt=''></img></div>
    </div>
    <div className='CityFilterContainer'><h2 className='CityFilter'>Ciudad</h2></div>

    <div className='City'></div>

      
    </div>
  )
}

export default FiltersPage
