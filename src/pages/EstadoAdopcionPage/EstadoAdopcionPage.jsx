import "./EstadoAdopcionPage.css"
import React, { useEffect, useState } from 'react'
import Searcher from '../../components/Searcher/Searcher'
import axios from 'axios';

const EstadoAdopcionPage = () => {
  const [animales, setAnimales] = useState([]);
  const [search, setSearch] = useState('');
  const [hayResultados, setHayResultados] = useState(true); 

  useEffect(() => {
    axios.get("http://localhost:5000/animales").then(res => {
      setAnimales(res.data);
    })
  }, [])

  const handleSearcher = (e) => {
    setSearch(e.target.value);
  };

  const animalesFiltrados = animales.filter((animal) => {
    return animal.datos.especie.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    setHayResultados(animalesFiltrados.length > 0); 
  }, [animalesFiltrados]);

  return (
    <>
      <Searcher search={search} handleSearcher={handleSearcher} />
      {hayResultados ? (
        <div className='padre'>
          {animalesFiltrados.map((animal, index) => (
            <div className='padre__hijo' key={index}>
              <div className='padre__hijo--top'>
                <h2 className='padre__hijo--top--h2'>Adopción de {animal.datos.nombre}</h2>
                <p className='padre__hijo--top--p'>"Estado de adopción"</p>
              </div>
              <div className='padre__hijo--bot'>
                <img className='padre__hijo--bot--img' src={animal.datos.imagen} alt={animal.datos.nombre}></img>
                <ul className='padre__hijo--bot--clave'>
                  <li>Nombre</li>
                  <li>Especie</li>
                  <li>Sexo</li>
                </ul>
                <ul className='padre__hijo--bot--valor'>
                  <li>{animal.datos.nombre}</li>
                  <li>{animal.datos.especie}</li>
                  <li>{animal.datos.sexo}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p  className='noresultados'>No se han encontrado mascotas.</p>
      )}
    </>
  )
}

export default EstadoAdopcionPage
