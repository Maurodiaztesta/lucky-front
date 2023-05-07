import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
     <nav className='NavBar'>
       <Link to="/home"><img className="NavLogo" src="../../assets/img/logo/home.png" alt="home"></img></Link>
        <img className="NavLogo" src="../../assets/img/logo/NavMap.png" alt="map"></img>
        <Link to="/adopt"> <img className="NavLogo" src="../../assets/img/logo/mascota.png" alt="pets"></img></Link>
       <Link to="/profile"><img className="NavLogo" src="../../assets/img/logo/perfil.png" alt="profile"></img></Link>
       <Link to="/more"><img className="NavLogo" src="../../assets/img/logo/assets.png" alt="assets"></img></Link>
     </nav>
    </>
  )
}

export default NavBar
