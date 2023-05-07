import "./Gallery.scss"
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'

const Gallery = () => {
    const [animales, setAnimales] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/animales").then(res => {
            setAnimales(res.data);
            console.log(res.data);
        })
    }, [])
  return (
    <div className='contenedorPadre'>
        {animales.map((animal, index) => <div className='contenedorPadre__hijo' key={index}>
            <img className='contenedorPadre__hijo--img' src='../../assets/img/imagenes/gato.png' alt=''></img>
            <div className='contenedorPadre__hijo--textos'>
                <h2 className='contenedorPadre__hijo--textos--nombre'>{animal.datos.nombre}</h2>
                <div className='contenedorPadre__hijo--textos--textder'>
                    <p className='contenedorPadre__hijo--textos--textder--sexo'>{animal.datos.sexo}</p>
                    <p className='contenedorPadre__hijo--textos--textder--peso'>{animal.datos.peso}KG</p>
                </div>
            </div>
        </div>)}
    </div>
  )
}

export default Gallery