import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Contacto = () => {

    const [nombre, setNombre]         = useState('')
    const [email, setEmail]           = useState('')
    const [asunto, setAsunto]           = useState('')
    const [telefono, setTelefono]     = useState('')
    const [mensaje, setMensaje]     = useState('')


    const onNombreChange =(e) => {
        setNombre(e.target.value)
      }

  const onEmailChange =(e) => {
        setEmail(e.target.value)
      }

      const onAsuntoChange =(e) => {
        setAsunto(e.target.value)
      }

  const onTelefonoChange =(e) => {
        setTelefono(e.target.value)
      }
  const onMensajeChange =(e) => {
          setMensaje(e.target.value)
      }

    const [contacto, setContacto] = useState(false)

const [invalid, setInvalid] = useState(false)

    const contactoo = (e) => {
        e.preventDefault()
    
        if (nombre === '' || telefono === '' || email === '' || asunto === '' || mensaje === '') {
            return setInvalid(true)
        }
        setInvalid(false)

        setContacto(true)

       setTimeout(() => {

        setContacto(false)

        setNombre('')
        setEmail('')
        setAsunto('')
        setTelefono('')
        setMensaje('')
           
       }, 7000);

    }

    console.log(contacto
        )

    return (
        <div className="contacto animate__animated animate__fadeIn contenedor">
            <h1 className="text-center titulo-contacto"> Contactate con nosotros </h1>

            <div className="texto">
    
      <p> ¿Quieres tener mas informacion sobre un producto? 
          ¿Tienes alguna duda sobre las entregas? 
          ¿Quieres hacer una compra al por mayor?
      </p>
      <p>Rellena el formulario de contacto o hablanos por <Link to={{ pathname: "https://wa.me/56962121886?text=Tengo%20una%20duda%20con%20mi%20compra" }} target="_blank" className="textdecoration" > <span>Whatsapp</span>   </Link> para una comunicacion mas rapida</p>

      

            </div>

            <form className="formulario">

                <fieldset>
                    <legend>Tus Datos</legend>

                    { contacto ? <p className="formularioExitoso"> Gracias por contactarte con nosotros! te escribiremos lo antes posible.</p> : 
                    <>
                    {invalid ? <p className="invalidContacto"> Debes rellenar todos los campos</p> : null}
                    <div className="campo">
                    <label for="nombre"> Nombre: </label>
                    <input id="nombre" type="text" placeholder="Tu nombre" required onChange={e => onNombreChange(e)} />
            </div>

            <div className="campo">
                    <label for="asunto"> Asunto: </label>
                    <input id="asunto" type="text" placeholder="Tu Asunto" required  onChange={e => onAsuntoChange(e)} />
             </div>

             <div className="campo">
                    <label for="email"> Email: </label>
                    <input id="email" type="email" placeholder="Tu Email"  required onChange={e => onEmailChange(e)}  />
             </div>

             <div className="campo">
                    <label for="tel"> Telefono: </label>
                    <input id="tel" type="tel" placeholder="Tu Telefono" required  onChange={e => onTelefonoChange(e)}  />
             </div>


             <div className="campo">
                    <label for="fecha"> Mensaje: </label>
                    <textarea rows="3"  cols="25" required onChange={e => onMensajeChange(e)} ></textarea>
             </div>
                    
                    </>
                    
                    
                    }


                   
                   

                </fieldset>

                
                  {contacto ? null :  <input type="submit"  className="btn btn-info formbtn" value="Enviar Formulario" onClick={contactoo} />}
           

               

        </form>
        </div>
    )
}
