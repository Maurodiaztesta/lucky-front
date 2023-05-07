import axios from "axios";
import "./PerfilAnimalPage.css";
import moment from 'moment'; // para fecha
import React, { useEffect, useState } from "react";

  const PerfilAnimalPage = ({ animalId }) => {
  const [vista, setVista] = useState("datos");
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/animales/645691a200cf09d6b0fdf3c1`).then((res) => {
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
          <div  className= "perfil-animal-page-body__data-container" key={animal._id}>
            <p>Nombre: <span className="span">{animal.datos.nombre}</span></p>
            <p>Especie:<span className="span">{animal.datos.especie}</span></p>
            <p>Fecha de nacimiento:<span className="span">{moment(animal.datos.fechaNacimiento).format('DD-MM-YYYY')}</span> </p>
            <p>Sexo: <span className="span">{animal.datos.sexo}</span></p>
            <p>Tamaño: <span className="span">{animal.datos.tamaño}</span></p>
            <p>Peso: <span className="span">{animal.datos.peso}</span></p>
            <div className="personalidad">
              <p>Personalidad: {animal.datos.personalidad}</p>
            </div>
            <div className="historia">
              <p>Historia: {animal.datos.historia}</p>
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
          <div className= "perfil-animal-page-body__data-container" key={animal._id}>
            <p>Vacunado: <span className="span">{animal.salud.vacunado ? "Sí" : "No"}</span></p>
            <p>Desparasitado:<span className="span">{animal.salud.desparasitado ? "Sí" : "No"}</span></p>
            <p>Sano:<span className="span"> {animal.salud.sano ? "Sí" : "No"}</span></p>
            <p>Esterilizado: <span className="span">{animal.salud.esterilizado ? "Sí" : "No"}</span></p>
            <p>Identificado: <span className="span">{animal.salud.identificado ? "Sí" : "No"}</span></p>
            <p>Microchip:<span className="span">{animal.salud.microchip ? "Sí" : "No"}</span></p>
          </div>
        ))}
      </div>
    );
  };

  const AdopcionAnimal = () => {
    return (
      <div>
        {animales.map((animal) => (
          <div  className= "perfil-animal-page-body__data-container" key={animal._id}>
            <p>Requisitos: {animal.adopcion.requisitos}</p>
            <p>Tasa de adopción: {animal.adopcion.tasaAdopcion}</p>
            <p>
              Envío a otra ciudad:{" "}
              {animal.adopcion.envioOtraCiudad ? "Sí" : "No"}
            </p>
          </div>
        ))}
      </div>
    );
  };
  const ImagenAnimal = () => {
    return (
      <div>
        {animales.map((animal) => (
          <div key={animal._id}>
            <img src={animal.datos.imagen} alt="imagen-animal"></img>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="perfil-animal-page">
      <div className="perfil-animal-page-header">
        <ImagenAnimal></ImagenAnimal>
        </div>
        <div className="perfil-animal-page-header-buttons">
          <button
            className={vista === "datos" ? "active" : ""}
            onClick={() => cambiarVista("datos")}
          >
            Datos
          </button>

          <button
            className={vista === "salud" ? "active" : ""}
            onClick={() => cambiarVista("salud")}
          >
            Salud
          </button>
          <button
            className={vista === "adopcion" ? "active" : ""}
            onClick={() => cambiarVista("adopcion")}
          >
            Adopción
          </button>
        </div>
      
      <div className="perfil-animal-page-body">
        {vista === "datos" && <DatosAnimal />}
        {vista === "salud" && <SaludAnimal />}
        {vista === "adopcion" && <AdopcionAnimal />}
        <div>
    <button onClick={() => console.log("Apadrinar")}>Apadrinar</button>
    <button onClick={() => console.log("Adoptar")}>Adoptar</button>
  </div>
      </div>
    </div>
  );
};
export default PerfilAnimalPage;
