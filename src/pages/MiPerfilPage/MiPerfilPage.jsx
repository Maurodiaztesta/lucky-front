import { useSelector } from "react-redux";
import "./MiPerfilPage.scss"
import React from 'react'

const MiPerfilPage = () => {

    const userInfo = useSelector((state) => state.auth.userInfo);
    console.log(userInfo);

  return (
    <div className="padreMI">
        <h1 className="padreMI__title">Nombre de usuario</h1>
    </div>
  )
}

export default MiPerfilPage