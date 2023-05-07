import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const [part, setPart] = useState(1);
    const [ data , setData ] = useState({
        Datos: {
            NombreApellidos : "",
            Email:"",
            Telefono:"",
            DNI:"",
            CalleNumeroPiso:"",
            CodigoPostal:"",
            Ciudad:"",
            Usuario:"6455351f4ceea66c37a222b6",
        },
        Mascota: {
            OtrosAnimales: false,
            CualesAnimales:"",
            SeLlevaBien: "",
            PorQueAdpotar:"",
            NecesidadesAnimal:"",
            Gastos:"",
            Alimentacion:"",
            Animales:"645691a200cf09d6b0fdf3c1"
        },
        FamiliaHogar:{
            DondeVives:"",
            Alquiler:false,
            CaseroAnimales:false,
            MudartePronto:false,
            Jardin:false,
            OtrasPersonas:false,
            TodosDeAcuerdo:false,
            VisitarCasa:false
        }
    });
    console.log(data.Datos);
    console.log(data.FamiliaHogar);
    console.log(data.Mascota);
    const { register , watch } = useForm({defaultValues: data});
    const handleContinue = () => {
        setPart(part + 1);
    }
    const handleBack = () => {
        setPart(part - 1);
    }
    const onChange = (e) => {
        setData({...watch(), [e.target.name] : e.target.value});
    }
    const handleSubmit = ($event) => {
        $event.preventDefault();
        axios.post("http://localhost:5000/adopcion", data).then(res => {
            console.log(res);
            console.log(res.data);
            
            
        })
    }

    return (
        <form>
            {part === 1 && (
                <div>
                    <h5>Formulario de adopción</h5>
                    <h3>Tus Datos</h3>
                    <input type='text' {...register("Datos.NombreApellidos")} onChange={onChange} placeholder='Nombre y Apellidos' />
                    <input type='text' {...register("Datos.Email")} onChange={onChange} placeholder='Email' />
                    <input type='text' {...register("Datos.Telefono")} onChange={onChange} placeholder='Teléfono' />
                    <input type='text' {...register("Datos.DNI")} onChange={onChange} placeholder='DNI' />
                    <h3>Dirección</h3>
                    <input type='text' {...register("Datos.CalleNumeroPiso")} onChange={onChange} placeholder='Calle , número, piso' />
                    <input type='text' {...register("Datos.CodigoPostal")} onChange={onChange}   placeholder='Código Postal' />
                    <input type='text' {...register("Datos.Ciudad")} onChange={onChange} placeholder='Ciudad' />

                    <input type='checkbox' value="aceptar" required={true} className='terms'/><label htmlFor='terms'>Acepto los términos y cóndiciones de la adopción</label>
                    <button type='button' onClick={handleContinue}>Continuar</button>
                </div>
            )}
            {part === 2 && (
                <div>
                    <button type='button' onClick={handleBack}>back</button>
                    <h5>Formulario de adopción</h5>
                    <h3>¿Tienes otros animales?</h3>
                    <label htmlFor='y1'>Sí</label>
                    <input type='radio' {...register("Mascota.OtrosAnimales")} onChange={onChange}  className="y1" value="true" required />
                    <label htmlFor='n1'>No</label>
                    <input type='radio'{...register("Mascota.OtrosAnimales")} onChange={onchange} className='n1' value="false" required />
                    <input type='text' {...register("Mascota.CualesAnimales")} onChange={onChange} placeholder='¿Cuáles?' />
                    <input type='text' placeholder='¿Se lleva bien con otros animales?' />                     
                    <label htmlFor='da1'>¿Por qué has elegido adoptar?</label>
                    <input type='text' className='da1' {...register("Mascota.PorQueAdpotar")} onChange={onChange}/>
                    <input type='text' {...register("Mascota.SeLlevaBien")} onChange={onChange} className='da1' />
                    <label htmlFor='da2'>¿Conoces las necesidades del animal?</label>
                    <input type='text' {...register("Mascota.NecesidadesAnimal")} onChange={onChange} className='da2' />
                    <label htmlFor='da3'>¿Conoces sus gastos?</label>
                    <input type='text' {...register("Mascota.Gastos")} onChange={onChange} className='da3' />
                    <label htmlFor='da4'>¿Conoces su alimentación?</label>
                    <input type='text' {...register("Mascota.Alimentacion")} onChange={onChange} className='da4' />
                    <button type='button' onClick={handleContinue}>Continuar</button>
                </div>
            )}
            {part === 3 && (
                <div>
                    <button type='button' onClick={handleBack}>back</button>
                    <h5>Formulario de adopción</h5>
                    <h3>Familia y hogar</h3>
                    <label htmlFor='casa'>¿Dónde vives?</label>
                    <input type='text' {...register("FamiliaHogar.DondeVives")} onChange={onChange} placeholder='Piso , casa , chalet...'/>
                    <h5>¿Vives de alquiler?</h5> 
                    <label htmlFor='ds1'>Sí</label>
                    <input className='ds1' {...register("FamiliaHogar.Alquiler")} onChange={onChange} value="true" type='radio'/>
                    <label htmlFor='dn1'>no</label>
                    <input type='radio' {...register("FamiliaHogar.Alquiler")} className='dn1' value="false"/>
                    <h5>¿Tu casero permite animales?</h5>
                    <label htmlFor='ds2'>Sí</label>
                    <input type='radio' {...register("FamiliaHogar.CaseroAnimales")} onChange={onChange} className='ds2' value="true"/>
                    <label htmlFor='dn2'>No</label>
                    <input type='radio' {...register("FamiliaHogar.CaseroAnimales")} onChange={onChange} className='dn2' value="false"/>
                    <h5>¿Crees que podrías mudarte pronto?</h5>
                    <label htmlFor='ds3'>Sí</label>
                    <input type='radio' {...register("FamiliaHogar.MudartePronto")} onChange={onchange} className='ds3' value='true'/>
                    <label htmlFor='dn3'>No</label>
                    <input type='radio' {...register("FamiliaHogar.MudartePronto")} onChange={onChange} className='dn3' value='false'/>
                    <h5>¿Tiene jardin?</h5>
                    <label htmlFor='ds4'>Sí</label>
                    <input type='radio' {...register("FamiliaHogar.Jardin")} onChange={onChange} className='ds4' value='true'/>
                    <label htmlFor='ds5'>No</label>
                    <input type='radio' {...register("FamiliaHogar.Jardin")} onChange={onChange} className='ds5' value='true'/>
                    <h5>¿Vives con otras personas?</h5>
                    <label htmlFor='ds5'>Sí</label>
                    <input type='radio' {...register("FamiliaHogar.OtrasPersonas")} onChange={onChange} className='ds5' value='true'/>
                    <label htmlFor='dn5'>No</label>
                    <input type='radio' className='dn5' {...register("FamiliaHogar.OtrasPersonas")} onChange={onChange} value='false'/>
                    <h5>¿Están todos de acuerdo con la adopción?</h5>
                    <label htmlFor='ds6'>Sí</label>
                    <input type='radio' className='ds6' {...register("FamiliaHogar.TodosDeAcuerdo")} onChange={onChange} value='true'/>
                    <label htmlFor='dn7'>No</label>
                    <input type='radio' className='dn7' {...register("FamiliaHogar.TodosDeAcuerdo")} onChange={onChange} value='false'/>
                    <h5>¿Estás de acuerdo con que visitemos tu casa?</h5>
                    <label htmlFor='ds7'>Sí</label>
                    <input type='radio' {...register("FamiliaHogar.VisitarCasa")} onChange={onchange} value="true" className='ds7'/>
                    <label htmlFor='dn7'>No</label>
                    <input type='radio' {...register("FamiliaHogar.VisitarCasa")} onChange={onChange} value="false" className='dn7'/>        
                    <button type='submit' onClick={handleSubmit}>Enviar</button>
                </div>
            )}
        </form>
    )
}

export default Form;
