import "./HomePage.scss"
import React from 'react'
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
        <div className="padre">
            <div className="padre__header">
                <h2 className="padre__header--saludo">¡Hola $USER$!</h2>
                <h2>METER SLIDER</h2>
            </div>
            <div className="padre__linea"></div>
            <div className="padre__bottom">
                <h3 className="padre__bottom--nov">Novedades</h3>
                <h2>METER GALLERY</h2>
            </div>
        </div>
        <NavBar></NavBar>
    </>
  )
}

export default HomePage