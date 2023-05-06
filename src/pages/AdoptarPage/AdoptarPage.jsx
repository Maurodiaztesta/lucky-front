import "./AdoptarPage.css"
import React from 'react'
import Searcher from '../../components/Searcher/Searcher'
import NavBar from "../../components/NavBar/NavBar"
import SwiperAdoption from "../../components/SwiperAdoption/SwiperAdoption"
import Gallery from "../../components/Gallery/Gallery"

const AdoptarPage = () => {
  return (
    <>
        <div className="APpadre">
            <div className="APpadre__top">
                <Searcher></Searcher>
                <div className="APpadre__top--mascotas">
                    <div className="APpadre__top--mascotas--añadir">
                        <h2 className="APpadre__top--mascotas--añadir--h2">Mis mascotas</h2>
                        <img className="APpadre__top--mascotas--añadir--img" src="/assets/img/logo_seleccionado/mS.png"></img>
                    </div>
                    <p className="APpadre__top--mascotas--add">Accede al perfil de tus mascotas</p>
                </div>
                <div>
                <SwiperAdoption></SwiperAdoption>
                </div>
            </div>
            <div className="APpadre__linea"></div>
            <div className="APpadre__bot">
                <a className="APpadre__bot--button" href="">
                    <p className="APpadre__bot--button--p">Estado de adopción</p>
                    <img className="APpadre__bot--button--img" src="/assets/img/logo/front.png"></img>
                </a>
                <div className="APpadre__bot--TG">
                    <div className="APpadre__bot--TG--t">
                        <h2 className="APpadre__bot--TG--t--h2">Animales en adopción</h2>
                        <a><img className="APpadre__bot--TG--t--img" src="/assets/img/logo/filtro.png"></img></a>
                    </div>
                    <div className="APpadre__bot--TG--gallery">
                    <Gallery></Gallery>
                    </div>
                </div>
            </div>
        </div>
        {/* <NavBar></NavBar> */}
    </>
  )
}

export default AdoptarPage