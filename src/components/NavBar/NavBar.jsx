// import { Link } from "react-router-dom";
import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div>
     <nav className='NavBar'>
        <img className="NavLogo" src="../../assets/img/logo/home.png" alt="home"></img>
        <img className="NavLogo" src="../../assets/img/logo/NavMap.png" alt="map"></img>
        <img className="NavLogo" src="../../assets/img/logo/mascota.png" alt="pets"></img>
        <img className="NavLogo" src="../../assets/img/logo/perfil.png" alt="profile"></img>
        <img className="NavLogo" src="../../assets/img/logo/assets.png" alt="assets"></img>
     </nav>
    </div>
  )
}

export default NavBar
