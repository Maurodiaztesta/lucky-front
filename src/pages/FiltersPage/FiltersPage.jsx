import React from 'react'
import "./FiltersPage.css"

const FiltersPage = () => {
  return (
    <div className='FiltersContainer'>
    <div className='FiltHeader'>
    <div className='DivTittle'><h1 className='Tittle'>Filtros</h1></div>
    <div className='FiltersBackDiv'><img className='filtersbackIMG' src='/assets/img/logo_seleccionado/X.png' alt=''></img></div>
    </div>
    <div className='CityFilterContainer'><label className='CityFilter'>Ciudad</label>
    <div className='City'><select name="color" id="color">
  <option value="Madrid">Madrid</option>
  <option value="Barcelona">Barcelona</option>
  <option value="Valencia">Valencia</option>
</select></div>
</div>

    

      
    </div>
  )
}

export default FiltersPage
