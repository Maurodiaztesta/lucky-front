import { Link, useNavigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Searcher from "../../components/Searcher/Searcher";
import "./ResultadosFiltroPage.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ResultadosFiltroPage = () => {
  const [filtroAplicado, setFiltroAplicado] = useState([]);
  const navigate = useNavigate();
  const [animales, setAnimales] = useState([]);
  const [search, setSearch] = useState("");
  const [animalesFiltrados, setAnimalesFiltrados] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/animales").then((res) => {
      setAnimales(res.data);
    });
  }, []);
  const handleSearcher = (event) => {
    const busqueda = event.target.value;
    setSearch(busqueda);
    if (animales.length > 0) {
      const filtrado = animales.filter((animal) =>
        animal.datos.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
      setAnimalesFiltrados(filtrado);
    }
  };

  return (
    <div className="container_results">
      <div className="SearcherDiv">
        <div>
          <img
            onClick={() => navigate("/adopt")}
            className="back_results"
            src="../../assets/img/logo/back.png"
            alt="back"
          />
        </div>

        <div>
          <Searcher search={search} handleSearcher={handleSearcher} />
        </div>

        <div>
          {" "}
          <Link className="filters" to="/filters">
          <img
            className="filter_results"
            src="../../assets/img/logo/filtro.png"
            alt="filter"
          />
            </Link>
        </div>
      </div>

      <Gallery 
        animales={animalesFiltrados.length > 0 ? animalesFiltrados : animales}
      ></Gallery>
    </div>
  );
};

export default ResultadosFiltroPage;
