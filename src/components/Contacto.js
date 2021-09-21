import React from 'react'
import { Link } from 'react-router-dom'

export const Contacto = () => {
    return (
        <div className="contacto animate__animated animate__fadeIn contenedor">
            <h1 className="text-center titulo-contacto"> Contactate con nosotros </h1>

            <div className="texto">
    
      <p> ¿Quieres tener mas informacion sobre un producto? 
          ¿Tienes alguna duda sobre las entregas? 
          ¿Quieres hacer una compra al por mayor?
      </p>
      <p>Rellena el formulario de contacto o hablanos por <span>Whatsapp</span> para una comunicacion mas rapida</p>

            </div>

            <form className="formulario">

                <fieldset>
                    <legend>Tus Datos</legend>
                    <div className="campo">
                            <label for="nombre"> Nombre: </label>
                            <input id="nombre" type="text" placeholder="Tu nombre" required />
                    </div>

                    <div className="campo">
                            <label for="asunto"> Asunto: </label>
                            <input id="asunto" type="text" placeholder="Tu Asunto" required />
                     </div>

                     <div className="campo">
                            <label for="email"> Email: </label>
                            <input id="email" type="email" placeholder="Tu Email"  required/>
                     </div>

                     <div className="campo">
                            <label for="tel"> Telefono: </label>
                            <input id="tel" type="tel" placeholder="Tu Telefono" required/>
                     </div>


                     <div className="campo">
                            <label for="fecha"> Mensaje: </label>
                            <textarea rows="3"  cols="25" required></textarea>
                     </div>
                   

                </fieldset>

                

        

                <input type="submit"  className="btn btn-info formbtn" value="Enviar Formulario" />

        </form>
        </div>
    )
}
