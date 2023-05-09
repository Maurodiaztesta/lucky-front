import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/auth.actions';

const Logout = () => {
    const dispatch = useDispatch();

    const closeSession = () => {
        dispatch(logoutUser());
    }
  return (
    <div>
      <button onClick={closeSession}>Cerrar Sesion</button>
    </div>
  )
}

export default Logout
