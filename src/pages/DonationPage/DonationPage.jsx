import React from 'react'
import "./DonationPage.css"

const DonationPage = () => {
  return (
    
    <div className='div__donation'>
    
	<h1>Donacion al refugio animales</h1>
	
    <form action="procesar_donacion.php" method="POST">
		<label for="nombre">Nombre completo:</label>
		<input type="text" id="nombre" name="nombre" required></input>
		
		<label for="email">Correo electrónico:</label>
		<input type="email" id="email" name="email" required></input>
		
		<label for="telefono">Número de teléfono:</label>
		<input type="tel" id="telefono" name="telefono" required></input>
		
		<label for="cantidad">Cantidad a donar:</label>
		<input type="number" id="cantidad" name="cantidad" min="1" required></input>
		
		<label for="metodo">Método de pago:</label>
		<select id="metodo" name="metodo" required>
			<option value="tarjeta">Tarjeta de crédito/débito</option>
			<option value="paypal">PayPal</option>
			<option value="transferencia">Transferencia bancaria</option>
		</select>
		
		<label for="comentario">Comentario:</label>
		<textarea id="comentario" name="comentario" rows="4" cols="50"></textarea>
		
		<input type="submit" value="Donar"></input>
	</form>
      
    </div>
    
  )
}

export default DonationPage
