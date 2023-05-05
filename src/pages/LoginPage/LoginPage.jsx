import { useForm } from "react-hook-form";
import "./LoginPage.scss"
import React from 'react'

const LoginPage = () => {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    // const onSubmit = formData => {
    //     API.post('login', formData).then(res => {
    //         localStorage.setItem('token', res.data.token)
    //         localStorage.setItem('user', JSON.stringify(res.data.user))
    //     })
    // }


  return (
    <div className="padre">
        <div className="padre__header">
            <img className="padre__header--img" src="/assets/img/logo/logo_titulo_junto.png"></img>
            <h3 className="padre__header--title">¡Hola! para continuar, inicia sesión o crea una cuenta.</h3>
        </div>
        <form className="padre__form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Email" className="padre__form--input" type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}></input>
            {errors.email?.type === 'required' && "Email is required"}
            {errors.email?.type === 'pattern' && "Enter a valid email address: xxx@xxx.xx"}
            <input placeholder="Password" className="padre__form--input" type="password" {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})}></input> {/* Minimum eight characters, at least one uppercase letter, one lowercase letter and one number */}
            {errors.password?.type === 'required' && "Password is required"}
            {errors.password?.type === 'pattern' && "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number"}
            <div className="padre__form--div">
                <a className="padre__form--div--a">¿Has olvidado tu contraseña?</a>
            </div>
            
            <div className="padre__form--botones">
                <button className="padre__form--botones--is">Iniciar sesión</button>
                <button className="padre__form--botones--cc">Crear cuenta</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage