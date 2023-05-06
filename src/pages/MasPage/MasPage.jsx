import NavBar from "../../components/NavBar/NavBar";
import "./MasPage.css"
import React from "react";

const MasPage = () => {
  return (
    <>
      <div className="ProfContainer">
        <div className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo/caseta.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Asociaciones protectoras </h3>
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
              src="../../../assets/img/logo/calendario.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Eventos </h3>
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
              src="../../../assets/img/logo/blog.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Curiosidades </h3>
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
              src="../../../assets/img/logo/info.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Ayuda </h3>
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
              src="../../../assets/img/logo/config.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Configuración </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </div>
        <div className="spaceG"></div>
        <div className="OptContainer">
          <div className="ProfOptions">
            <img
              className="opt_img"
              src="../../../assets/img/logo/puerta.png"
              alt="Perfil"
            ></img>
            <h3 className="opt_text">Cerrar sesión </h3>
          </div>
          <img
            className="arrow"
            src="../../../assets/img/logo_seleccionado/arrow.png"
            alt=""
          ></img>
        </div>
      </div>
      <NavBar></NavBar>
    </>
  );
};

export default MasPage;
