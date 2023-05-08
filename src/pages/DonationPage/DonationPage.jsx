import React from 'react'
import "./DonationPage.css"

const DonationPage = () => {
  return (
    
    <div className='div__donation'>
    
	<h1 className='title-donation'>Donacion al refugio animales</h1>
	
    <form className="form-donation" action="procesar_donacion.php" method="POST">
		<label className='label-donation' for="nombre">Nombre completo:</label>
		<input type="text" id="nombre" name="nombre" required></input>
		
		<label className='label-donation' for="email">Correo electrónico:</label>
		<input type="email" id="email" name="email" required></input>
		
		<label className='label-donation' for="telefono">Número de teléfono:</label>
		<input type="tel" id="telefono" name="telefono" required></input>
		
		<label className='label-donation' for="cantidad">Cantidad a donar:</label>
		<input type="number" id="cantidad" name="cantidad" min="1" required></input>
		
		<label className='label-donation' for="metodo">Método de pago:</label>
		<select id="metodo" name="metodo" required>
			<option value="tarjeta">Tarjeta de crédito/débito</option>
			<option value="paypal">PayPal</option>
			<option value="transferencia">Transferencia bancaria</option>
		</select>
		
		<label className='label-donation' for="comentario">Comentario:</label>
		<textarea className='text-donation' id="comentario" name="comentario" rows="4" cols="50"></textarea>
		
		<input type="submit" value="Donar"></input>
	</form>
      
    </div>
    
  )
}

export default DonationPage
