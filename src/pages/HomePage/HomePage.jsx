import "./HomePage.css";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SwiperHome from "../../components/Swiper/SwiperHome";

const HomePage = () => {
  
  return (
    <div>
      <div className="HPpadre">
        <div className="HPpadre__header">
          <h2 className="HPpadre__header--saludo">¡Hola $USER$!</h2>
          {/* <h1>Colocar slider</h1> */}
          <div className="HPpadre__header--swiper">
            <SwiperHome></SwiperHome>
          </div>
        </div>
        <div className="HPpadre__linea"></div>
        <div className="HPpadre__bottom">
          <h3 className="HPpadre__bottom--nov">Novedades</h3>
        </div>
        <div className="HPpadre__main">
          <div className="HPpadre__main--noticia">
            <img src="./assets/img/imagenes/hamster.png" alt="" />
            <p>10 Curiosidades sobre las chinchillas</p>
          </div>
          <div className="HPpadre__main--noticia">
            <img src="./assets/img/imagenes/iguana.png" alt="" />
            <p>Sabes qué comen las iguanas</p>
          </div>
          <div className="HPpadre__main--noticia">
            <img src="./assets/img/imagenes/perro_fachero.png" alt="" />
            <p>10 lugares para visitar con tu perro en Madrid</p>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default HomePage;
