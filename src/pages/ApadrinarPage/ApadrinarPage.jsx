import React from 'react'
import "./ApadrinarPage.css"

const ApadrinarPage = () => {
  return (
    <div className='div__apadrinar'>
    <div>
      <h1>Apadrina un animal</h1>
      </div>
      <section>
  <h2>Formulario de apadrinamiento</h2>
  <form action="#" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required></input>

    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required></input>

    <label for="animal">Animal a apadrinar:</label>
    <select id="animal" name="animal" required>
      <option value="">Selecciona una opción</option>
      <option value="perro">Perro</option>
      <option value="gato">Gato</option>
      <option value="conejo">Conejo</option>
      <option value="otros">Otros</option>
    </select>

    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje"></textarea>

    <button type="submit">Enviar</button>
  </form>
</section>

    </div>
  )
}

export default ApadrinarPage
