import React from "react";
import "./Warning.css";

const Warning = (props) => {
    return (
        <div className="warning-padre">
          <div className="warning-content">
            <h2 className="title-warning">Solicitud de adopción</h2>
            <div className="warning-info">
            <p className="p-warning">
              Adoptar es un acto de amor, pero sobre todo una responsabilidad de por vida
            </p>
            </div>
            <div className="warning-info">
            <p className="p-warning">
              Por éste motivo es importante que veas el siguiente vídeo donde te explicamos cómo va a ser todo el proceso de adopción
            </p>
            </div>
            <img src="./assets/img/imagenes/chica_video.png" alt="" />
            <h4 className="subtitle-warning">¿Quieres continuar con el proceso de adopción?</h4>
            <div className="button-warning-padre">
              <button className="warning-btn" onClick={props.onClose}>Cancelar</button>
              <button className="warning-btn" onClick={props.onContinue}>Continuar</button>
            </div>
          </div>
        </div>
      );
    
};

export default Warning;
