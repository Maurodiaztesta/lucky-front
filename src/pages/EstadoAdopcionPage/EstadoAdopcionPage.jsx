import "./EstadoAdopcionPage.css"
import React, { useEffect, useState } from 'react'
import Searcher from '../../components/Searcher/Searcher'
import axios from 'axios';

const EstadoAdopcionPage = () => {

    const [animales, setAnimales] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/animales").then(res => {
            setAnimales(res.data);
            console.log(res.data);
        })
    }, [])

  return (
    <>
        <Searcher></Searcher>
        <div className='padre'>
            {animales.map((animal, index) => <div className='padre__hijo' key={index}>
                <div className='padre__hijo--top'>
                    <h2 className='padre__hijo--top--h2'>Adopción de {animal.datos.nombre}</h2>
                    <p className='padre__hijo--top--p'>"Estado de adopción"</p>
                </div>
                <div className='padre__hijo--bot'>
                    <img className='padre__hijo--bot--img' src={animal.datos.imagen}></img>
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
            </div>)}
        </div>
    </>
  )
}

export default EstadoAdopcionPage