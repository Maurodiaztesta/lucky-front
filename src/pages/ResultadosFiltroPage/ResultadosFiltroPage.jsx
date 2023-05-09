import { useNavigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Searcher from "../../components/Searcher/Searcher";
import "./ResultadosFiltroPage.css";
import React from "react";
import { useSelector } from "react-redux";

const ResultadosFiltroPage = () => {
  const animalesFiltrados = useSelector((state) => state.animalesFiltrados);

  console.log(animalesFiltrados);
  const navigate = useNavigate();

  return (
    <div className="Container">
      <div className="SearcherDiv">
        <img
          onClick={() => navigate("/filters")}
          className="back"
          src="../../assets/img/logo/back.png"
          alt="back"
        ></img>
        <Searcher></Searcher>
      </div>
      {/* <Gallery></Gallery> */}
    </div>
  );
};

export default ResultadosFiltroPage;
