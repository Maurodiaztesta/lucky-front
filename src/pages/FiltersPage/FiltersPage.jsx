import React, { useEffect, useState } from "react";
import "./FiltersPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const FiltersPage = () => {
  const [protectoras, setPortectoras] = useState([]);
  const [protectorasF, setPortectorasF] = useState([]);

  const [select, setSelect] = useState("Madrid");

  const [activeButtons, setActiveButtons] = useState({
    especie: null,
    sexo: null,
    tamaño: null,
    ciudad: select,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/protectora").then((res) => {
      setPortectoras(res.data);
      // console.log(res.data);
    });
  }, []);

  useEffect(() => {
    let protectCopy = [];
    let info = [];
    axios.get("http://localhost:5000/protectora").then((res) => {
      info = res.data;
      console.log(info);
      for (const pro of info) {
        if (
          pro.city
            .toLowerCase()
            .includes(activeButtons.ciudad.toLocaleLowerCase())
        ) {
          protectCopy.push(pro);
        }
      }
      setPortectorasF(protectCopy);
    });
  }, [activeButtons]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeButton = (buttonId, name) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      especie: buttonId === activeButtons.especie ? null : name,
      ciudad: select,
    }));
  };

  const changeButton2 = (buttonId, name) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      sexo: buttonId === activeButtons.sexo ? null : name,
      ciudad: select,
    }));
  };

  const changeButton3 = (buttonId, name) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      tamaño: buttonId === activeButtons.tamaño ? null : name,
      ciudad: select,
    }));
  };

  const aplicar = () => {
    console.log(activeButtons);
  };

  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header--vacio"></div>
        <div className="main__header--titulo">
          <h2>Filtros</h2>
        </div>
        <div className="main__header--x">
          <Link to="">
            <img src="./assets/img/logo_seleccionado/x.png" alt="x"></img>
          </Link>
        </div>
      </div>
      <div className="main__body">
        <form className="main__body--form">
          <h2 className="main__body--form--label">Ciudad</h2>
          <select
            onChange={(e) => setSelect(e.target.value)}
            className="main__body--form--select"
          >
            {protectoras.map((protectora, index) => (
              <option
                className="main__body--form--label--select--option"
                key={index}
              >
                {protectora.city}
              </option>
            ))}
          </select>
        </form>
        <div className="main__body--especie">
          <h2 className="main__body--especie--titulo">Especie</h2>
          <div className="main__body--especie--gallery">
            <button
              onClick={() => changeButton(1, "perro")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "perro" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/perro.png"
                  alt="perro"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/perro.png"
                  alt="perro"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Perro
              </p>
            </button>
            <button
              onClick={() => changeButton(2, "gato")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "gato" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/gato.png"
                  alt="gato"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/gato.png"
                  alt="gato"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Gato
              </p>
            </button>
            <button
              onClick={() => changeButton(3, "conejo")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "conejo" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/conejo.png"
                  alt="conejo"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/conejo.png"
                  alt="conejo"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Conejo
              </p>
            </button>
            <button
              onClick={() => changeButton(4, "cobaya")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "cobaya" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/cobaya.png"
                  alt="cobaya"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/cobaya.png"
                  alt="cobaya"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Cobaya
              </p>
            </button>
            <button
              onClick={() => changeButton(5, "pequeño mamifero")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "pequeño mamifero" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/pequeño_mamifero.png"
                  alt="pequeño_mamifero"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/pequeño_mamifero.png"
                  alt="pequeño_mamifero"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Pequeño<br></br>mamífero
              </p>
            </button>
            <button
              onClick={() => changeButton(6, "huron")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "huron" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/huron.png"
                  alt="huron"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/huron.png"
                  alt="huron"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Hurón
              </p>
            </button>
            <button
              onClick={() => changeButton(7, "pez")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "pez" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/pez.png"
                  alt="pez"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/pez.png"
                  alt="pez"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">Pez</p>
            </button>
            <button
              onClick={() => changeButton(8, "reptil")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "reptil" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/reptil.png"
                  alt="reptil"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/reptil.png"
                  alt="reptil"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Reptil
              </p>
            </button>
            <button
              onClick={() => changeButton(9, "anfibio")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "anfibio" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/anfibio.png"
                  alt="anfibio"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/anfibio.png"
                  alt="anfibio"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Anfibio
              </p>
            </button>
            <button
              onClick={() => changeButton(10, "aracnido o insecto")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "aracnido o insecto" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/araña.png"
                  alt="araña"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/araña.png"
                  alt="araña"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">
                Arácnido <br></br>o insecto
              </p>
            </button>
            <button
              onClick={() => changeButton(11, "ave")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.especie === "ave" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/ave.png"
                  alt="ave"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/ave.png"
                  alt="ave"
                />
              )}
              <p className="main__body--especie--gallery--button--texto">Ave</p>
            </button>
          </div>
          <h2 className="main__body--especie--titulo">Sexo</h2>
          <div className="main__body--especie--gallery">
            <button
              onClick={() => changeButton2(1, "hembra")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.sexo === "hembra" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/female.png"
                  alt="female"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/female.png"
                  alt="female"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Hembra
              </p>
            </button>
            <button
              onClick={() => changeButton2(2, "macho")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.sexo === "macho" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/male.png"
                  alt="male"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/male.png"
                  alt="male"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Macho
              </p>
            </button>
          </div>
          <h2 className="main__body--especie--titulo">Tamaño</h2>
          <div className="main__body--especie--gallery">
            <button
              onClick={() => changeButton3(1, "pequeño")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.tamaño === "pequeño" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/pequeño.png"
                  alt="pequeño"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/pequeño.png"
                  alt="pequeño"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Pequeño
              </p>
            </button>
            <button
              onClick={() => changeButton3(2, "mediano")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.tamaño === "mediano" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/mediano.png"
                  alt="mediano"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/mediano.png"
                  alt="mediano"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Mediano
              </p>
            </button>
            <button
              onClick={() => changeButton3(3, "grande")}
              className="main__body--especie--gallery--button"
            >
              {activeButtons.tamaño === "grande" ? (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo_seleccionado/grande.png"
                  alt="grande"
                />
              ) : (
                <img
                  className="main__body--especie--gallery--button--img"
                  src="./assets/img/logo/grande.png"
                  alt="grande"
                />
              )}
              <p className="main__body--especie--gallery--button--img--texto">
                Grande
              </p>
            </button>
          </div>
        </div>
        <button onClick={aplicar} className="main__body--aplicar">
          Aplicar
        </button>
      </div>
      <div>
        {protectorasF.map((protectora, index) => (
          <div key={index}>
            <p>{protectora.name}</p>
            <p>{protectora.city}</p>
            <img src={protectora.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersPage;
