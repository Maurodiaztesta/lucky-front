import React from "react";
import "./LoginElectionPage.scss";

function LoginElectionPage() {
  return (
    <div className='divPadre' style={{backgroundImage: "url(/assets/img/imagenes/mujer_perro.png)"}}>
    <div className="container">
      <div className="title">
        <h2>¿Cómo quieres entrar?</h2>
      </div>
      <div className="Button">
        <button>Usuario</button>
        <button>Asociación protectora</button>
        <a href="https://#">Registrarse en otro momento</a>
      </div>
    </div>
    </div>
  );
}

export default LoginElectionPage;
