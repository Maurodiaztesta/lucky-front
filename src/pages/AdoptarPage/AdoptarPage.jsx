import "./AdoptarPage.scss"
import React from 'react'
import Searcher from '../../components/Searcher/Searcher'
import NavBar from "../../components/NavBar/NavBar"

const AdoptarPage = () => {
  return (
    <>
        <div className="padre">
            <div className="padre__top">
                <Searcher></Searcher>
                <div className="padre__top--mascotas">
                    <div className="padre__top--mascotas--añadir">
                        <h2 className="padre__top--mascotas--añadir--h2">Mis mascotas</h2>
                        <img className="padre__top--mascotas--añadir--img" src="/assets/img/logo_seleccionado/mS.png"></img>
                    </div>
                    <p className="padre__top--mascotas--add">Accede al perfil de tus mascotas</p>
                </div>
                <h2>AQUI VA EL SLIDER</h2>
            </div>
            <div className="padre__linea"></div>
            <div className="padre__bot">
                <a className="padre__bot--button" href="">
                    <p className="padre__bot--button--p">Estado de adopción</p>
                    <img className="padre__bot--button--img" src="/assets/img/logo/front.png"></img>
                </a>
                <div className="padre__bot--TG">
                    <div className="padre__bot--TG--t">
                        <h2 className="padre__bot--TG--t--h2">Animales en adopción</h2>
                        <a><img className="padre__bot--TG--t--img" src="/assets/img/logo/filtro.png"></img></a>
                    </div>
                    <h2>AQUI VA LA GALERIA</h2>
                </div>
            </div>
        </div>
        <NavBar></NavBar>
    </>
  )
}

export default AdoptarPage