import "./HomePage.scss";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <div className="padre">
        <div className="padre__header">
          <h2 className="padre__header--saludo">¡Hola $USER$!</h2>
          <h1>Colocar slider</h1>
        </div>
        <div className="padre__linea"></div>
        <div className="padre__bottom">
          <h3 className="padre__bottom--nov">Novedades</h3>
        </div>
        <div className="padre__main">
          <div className="padre__main--noticia">
            <img src="./assets/img/imagenes/hamster.png" alt="" />
            <p>10 Curiosidades sobre las chinchillas</p>
          </div>
          <div className="padre__main--noticia">
            <img src="./assets/img/imagenes/iguana.png" alt="" />
            <p>Sabes qué comen las iguanas</p>
          </div>
          <div className="padre__main--noticia">
            <img src="./assets/img/imagenes/perro_fachero.png" alt="" />
            <p>10 lugares para visitar con tu perro en Madrid</p>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </>
  );
};

export default HomePage;
