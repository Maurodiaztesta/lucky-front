import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./ProfilePage.css";

import React from "react";

const ProfilePage = () => {
  return (
    <div className="ProfileHolePage">
      <div className="ProfContainer">
        <div className="Img_Center">
          <img
            className="ImageProf"
            src="../../../assets/img/logo_seleccionado/group.png"
            alt="profileIMG"
          ></img>
        </div>
        <div className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/chicaBlue.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Mi Perfil </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </div>
        <div className="OptContainer">
          <Link className="map" to="/map">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/localizationBlue.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Direcciones </h3>
          <img
            className="arrow2"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/favoritosCopy.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Favoritos </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </div>
        <div className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/notificaciones.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Notificaciones </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </div>
        <div className="space"></div>
        <div className="OptContainer">
        <Link className="Status" to="/status">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo/mascota.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Estado de adopción </h3>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="OptContainer">
          <Link className="Apadrinar" to="/Apadrinar">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/apadrina.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Apadrinar </h3>
          <img
            className="arrow6"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        <div className="OptContainer">
        <Link className="Donar" to="/donation">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo_seleccionado/donar.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Donar </h3>
          <img
            className="arrow3"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
          </div>
          </Link>
        </div>
        
      </div>
      <NavBar></NavBar>
    </div>
    
  );
};

export default ProfilePage;
