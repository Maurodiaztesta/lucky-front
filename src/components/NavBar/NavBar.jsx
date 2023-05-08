import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="NavBar">
        {window.location.pathname === "/home" ? <Link to="/home">
          <img
            className="NavLogo"
            src="../../assets/img/logo_seleccionado/home.png"
            alt="home"
          ></img>
        </Link> : <Link to="/home">
          <img
            className="NavLogo"
            src="../../assets/img/logo/home.png"
            alt="home"
          ></img>
        </Link>}
        {window.location.pathname === "/map" ? <Link to="/map">
          <img
            className="NavLogo"
            src="../../assets/img/logo_seleccionado/NavMap.png"
            alt="map"
          ></img>
        </Link> : <Link to="/map">
          <img
            className="NavLogo"
            src="../../assets/img/logo/NavMap.png"
            alt="map"
          ></img>
        </Link>}
        {window.location.pathname === "/adopt" ? <Link to="/adopt">
          <img
            className="NavLogo"
            src="../../assets/img/logo_seleccionado/mascota.png"
            alt="pets"
          ></img>
        </Link> : <Link to="/adopt">
          <img
            className="NavLogo"
            src="../../assets/img/logo/mascota.png"
            alt="pets"
          ></img>
        </Link>}
        {window.location.pathname === "/profile" ? <Link to="/profile">
          <img
            className="NavLogo__border"
            src="../../assets/img/logo/perfil.png"
            alt="profile"
          ></img>
        </Link> : <Link to="/profile">
          <img
            className="NavLogo"
            src="../../assets/img/logo/perfil.png"
            alt="profile"
          ></img>
        </Link>}
        {window.location.pathname === "/more" ? <Link to="/more">
          <img
            className="NavLogo"
            src="../../assets/img/logo_seleccionado/assets.png"
            alt="assets"
          ></img>
        </Link> : <Link to="/more">
          <img
            className="NavLogo"
            src="../../assets/img/logo/assets.png"
            alt="assets"
          ></img>
        </Link>}
      </nav>
    </>
  );
};

export default NavBar;
