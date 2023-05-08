import React from 'react'
import "./ApadrinarPage.css"

const ApadrinarPage = () => {
  return (
    <div className='div__apadrinar'>
    <div>
      <h1 className='title-apadrinar'>Apadrina un animal</h1>
      </div>
      <section>
  <h2 className='subtitle-apadrinar'>Formulario de apadrinamiento</h2>
  <form className='form-apadrinar' action="#" method="POST">
    <label className='label-apadrinar' for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required></input>

    <label className='label-apadrinar' for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required></input>

    <label className='label-apadrinar' for="animal">Animal a apadrinar:</label>
    <select id="animal" name="animal" required>
      <option value="">Selecciona una opción</option>
      <option value="perro">Perro</option>
      <option value="gato">Gato</option>
      <option value="conejo">Conejo</option>
      <option value="otros">Otros</option>
    </select>

    <label className='label-apadrinar' for="mensaje">Mensaje:</label>
    <textarea className='text-apadrinar' id="mensaje" name="mensaje"></textarea>

    <button className='button-apadrinar' type="submit">Enviar</button>
  </form>
</section>

    </div>
  )
}

export default ApadrinarPage
