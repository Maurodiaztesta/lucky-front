import axios from "axios";
import "./PerfilAnimalPage.css";
import moment from "moment"; // para fecha
import React, { useEffect, useState } from "react";

const PerfilAnimalPage = ({ animalId }) => {
  const [vista, setVista] = useState("datos");
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/animales/64590aa12da8eb444a5c5767`)
      .then((res) => {
        setAnimales([res.data]);
        console.log(res.data);
      });
  }, [animalId]);

  const cambiarVista = (nuevaVista) => {
    setVista(nuevaVista);
  };

  const DatosAnimal = () => {
    return (
      <div>
        {animales.map((animal) => (
          <div className="principal" key={animal._id}>
            <div className="principal__hijo">
              <div className="principal__hijo--linea">
                <p className="principal__hijo--linea--clave">Nombre</p>
                <p className="principal__hijo--linea--valor">{animal.datos.nombre}</p>
              </div>
              <div className="principal__hijo--linea">
                <p className="principal__hijo--linea--clave">Especie</p>
                <p className="principal__hijo--linea--valor">{animal.datos.especie}</p>
              </div>
              <div className="principal__hijo--linea">
                <p className="principal__hijo--linea--clave">Fecha de nacimiento</p>
                <p className="principal__hijo--linea--valor">{moment(animal.datos.fechaNacimiento).format("DD-MM-YYYY")}</p>
              </div>
              <div className="principal__hijo--linea">
                <p className="principal__hijo--linea--clave">Sexo</p>
                <p className="principal__hijo--linea--valor">{animal.datos.sexo}</p>
              </div>
              <div className="principal__hijo--linea">
                <p className="principal__hijo--linea--clave">Tamaño</p>
                <p className="principal__hijo--linea--valor">{animal.datos.tamaño}</p>
              </div>
              <div className="principal__hijo--linea">
                <p className="principal__hijo--linea--clave">Peso</p>
                <p className="principal__hijo--linea--valor">{animal.datos.peso}</p>
              </div>
            </div>
            <div className="principal__personalidad">
              <h2 className="principal__personalidad--titulo">Personalidad</h2>
              <p className="principal__personalidad--dato">{animal.datos.personalidad}</p>
            </div>
            <div className="principal__historia">
              <h2 className="principal__historia--titulo">Historia</h2>
              <p className="principal__historia--datos">{animal.datos.historia}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const SaludAnimal = () => {
    return (
      <div>
        {animales.map((animal) => (
          <div className="principal" key={animal._id}>
            <div className="principal__hijo">
                <div className="principal__hijo--linea">
                  <p className="principal__hijo--linea--clave">Vacunado</p>
                  <p className="principal__hijo--linea--valor">{animal.salud.vacunado ? "Sí" : "No"}</p>
                </div>
                <div className="principal__hijo--linea">
                  <p className="principal__hijo--linea--clave">Desparasitado</p>
                  <p className="principal__hijo--linea--valor">{animal.salud.desparasitado ? "Sí" : "No"}</p>
                </div>
                <div className="principal__hijo--linea">
                  <p className="principal__hijo--linea--clave">Sano</p>
                  <p className="principal__hijo--linea--valor">{animal.salud.sano ? "Sí" : "No"}</p>
                </div>
                <div className="principal__hijo--linea">
                  <p className="principal__hijo--linea--clave">Esterilizado</p>
                  <p className="principal__hijo--linea--valor">{animal.salud.esterilizado ? "Sí" : "No"}</p>
                </div>
                <div className="principal__hijo--linea">
                  <p className="principal__hijo--linea--clave">Identificado</p>
                  <p className="principal__hijo--linea--valor">{animal.salud.identificado ? "Sí" : "No"}</p>
                </div>
                <div className="principal__hijo--linea">
                  <p className="principal__hijo--linea--clave">Microchip</p>
                  <p className="principal__hijo--linea--valor">{animal.salud.microchip ? "Sí" : "No"}</p>
                </div>
            </div>
            <div className="principal__info">
              <p className="principal__info--text">Tienes que saber que...</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const AdopcionAnimal = () => {
    return (
      <div>
        {animales.map((animal) => (
          <div className="principal" key={animal._id}>
            <div className="principal__caja">
              <h3 className="principal__caja--titulo">Requisitos adopción</h3>
              <p className="principal__caja--dato">{animal.adopcion.requisitos}</p>
            </div>
            <div className="principal__caja">
              <h3 className="principal__caja--titulo">Tasa de adopción</h3>
              <p className="principal__caja--dato">{animal.adopcion.tasaAdopcion}</p>
            </div>
            <div className="principal__caja">
              <h3 className="principal__caja--titulo">¿Se envía a otra ciudad?</h3>
              <p className="principal__caja--dato">{animal.adopcion.envioOtraCiudad ? "Sí" : "No"}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const ImagenAnimal = () => {
    return (
      <div className="header">
        {animales.map((animal) => (
            <img className="header__img" key={animal._id} src={animal.datos.imagen} alt="imagen-animal"></img>
        ))}
      </div>
    );
  };

  return (
    <div className="mainPage">
      <div className="mainPage__header">
        <ImagenAnimal></ImagenAnimal>
      </div>
      <div className="mainPage__menu">
        <button
          className={vista === "datos" ? "mainPage__menu--botonActive" : "mainPage__menu--boton"}
          onClick={() => cambiarVista("datos")}
        >
          Datos
        </button>

        <button
          className={vista === "salud" ? "mainPage__menu--botonActive" : "mainPage__menu--boton"}
          onClick={() => cambiarVista("salud")}
        >
          Salud
        </button>
        <button
          className={vista === "adopcion" ? "mainPage__menu--botonActive" : "mainPage__menu--boton"}
          onClick={() => cambiarVista("adopcion")}
        >
          Adopción
        </button>
      </div>

      <div className="mainPage__comp">
        {vista === "datos" && <DatosAnimal />}
        {vista === "salud" && <SaludAnimal />}
        {vista === "adopcion" && <AdopcionAnimal />}
        <div className="mainPage__button">
          <button className="mainPage__button--apa" onClick={() => console.log("Apadrinar")}>Apadrinar</button>
          <button className="mainPage__button--adop" onClick={() => console.log("Adoptar")}>Adoptar</button>
        </div>
      </div>
    </div>
  );
};
export default PerfilAnimalPage;
