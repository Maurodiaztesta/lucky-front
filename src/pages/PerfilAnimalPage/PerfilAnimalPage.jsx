import axios from "axios";
import "./PerfilAnimalPage.scss"
import React, { useEffect, useState } from 'react'

const PerfilAnimalPage = () => {
    const [animales, setAnimales] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/animales").then(res => {
            setAnimales(res.data);
            console.log(res.data);
        })
    }, [])
  return (
    <>
        <div className="PApadre">
            <div className="PApadre__top">
                <img className="PApadre__top--img" src="./assets/img/imagenes/hamster.png"></img>
                <div className="PApadre__top--divAb">
                    <div className="PApadre__top--divAb--izq">
                        <p>{animales[0].datos.nombre}</p>
                        <p>Ciudad</p>
                    </div>
                    <div className="PApadre__top--divAb--der">
                        <img src="./assets/img/logo_seleccionado/favoritos.png"></img>
                        <img src="./assets/img/logo_seleccionado/enviar.png"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PerfilAnimalPage