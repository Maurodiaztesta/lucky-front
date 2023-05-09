import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/auth.actions';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const closeSession = () => {
        dispatch(logoutUser(navigate));
    }
  return (
    <div>
      <button onClick={closeSession}>Cerrar Sesion</button>
    </div>
  )
}

export default Logout
