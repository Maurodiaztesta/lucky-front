import "./Searcher.scss"
import React from 'react'
// import axios from "axios";
// import  { useEffect, useState } from 'react'

const Searcher = () => {
    // const [Mascotas , setMascotas]=useState([]);
    // const [busqueda , setBusqueda]=useState("");
    // const [TablaMascotas , setTablaMascotas]=useState([]);

    // const peticionGetPets=()=>{
    //     axios.get("").then(response=>{
    //         console.log(response);
    //         setTablaMascotas(response.data)
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    // }

    // const handleChange=e=>{
    //     setBusqueda(e.target.value);
    //     filtrar(e.target.value)
    // }
    // const filtrar=(TerminoBusqueda)=>{
    //     var resultadoBusqueda=TablaMascotas.filter((elemento)=>{
    //         if(elemento.name.toString().toLowerCase().includes(TerminoBusqueda.toLowerCase())){
    //             return elemento;
    //         }
    //     })
    //     setTablaMascotas(resultadoBusqueda);
    // }

    // useEffect(()=>{
    
    //   peticionGetPets();
    // })

  return (
    <div>
      <div className="containerInput">

            <input type="text" className="inputBuscar"
            // value={busqueda}
            placeholder="     Buscar"
                // onChange={handleChange}
            />
            <button className=""></button>
        
    </div>
    </div>
  )
}

export default Searcher