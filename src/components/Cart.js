import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { cartContext } from './useContext'
import { collection, addDoc } from "firebase/firestore";
import { getData } from '../firebase.js';
import moment from 'moment';
import swal from 'sweetalert';



export const Cart = () => {

    const {carta,setCarta} = useContext(cartContext)

    const [loading, setLoading] = useState(false)

    const [listo, setListo] = useState(false)

    const [id, setId] = useState("")
    
   let history = useHistory()

    const apagar = carta.reduce((sum,value) => (sum + value.total), 0)  

    const userInfo ={
      name: 'alvi',
      mail: 'aleiva97@gmail.com',
      phone: '+569 62121886'
    }
  
    const handleDelete = (id)=> {
      setCarta( carta.filter(carta => carta.id !== id)) 

    }

    const handleClear = () => {
      setCarta([])
      
    }

    const handlePagar = async () => {
      setLoading(true)
      const docRef = await addDoc(collection(getData(), "orders"), {
        cliente: userInfo,
        item : carta,
        total: apagar,
        fecha: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
     
      setId(docRef.id)

      console.log("Document written with ID: ", docRef.id);

      swal("¡Orden Creada!", `${userInfo.name} el ID de tu orden es "${docRef.id}".
           Porfavor guardalo y espera a que nos contactemos contigo!`, "success");
           setListo(true)
     
    }

    const volver = () => {
      history.push("/")

      setCarta([])
    }
    
    
   
    return (
      <>

      {listo === false ? <div className="contenedor-catalogo animate__animated animate__fadeIn">
        <h1> Carrito {carta.length === 0 ? null :  <button onClick={handleClear}
          className="btn btn-danger animate__animated animate__fadeIn pago">  Limpiar Carrito </button>} </h1>
     <hr />


        <div className="cartcarro">
          {carta.length === 0 ?

              <div className="carrito-vacio">
                      <p className="animate__animated animate__fadeIn carro">
                          Carrito Vacio
                    
                      </p> 

                        <Link className="btn btn-primary found" to="/"> Buscar Productos </Link>
              </div>

         : carta.map((carta) => (
          
                        <>
                        <div className="disp">
                        <img src={carta.url} className="card-img cardcart" alt= {carta.title}  height='300px'/>  

                        <p className="productocarrito"> ( {carta.cantidad} ) - {carta.title} $ {carta.price * carta.cantidad}
                        
                        <button onClick={ () => handleDelete(carta.id)}
                        className="btn btn-warning"
                        > x </button>  </p>   
                        </div>
                      </>
        ) )}



        {
           
        carta.length === 0 ? null :  <div className="total">
        <p>Total: <span> ${apagar}</span> </p>
        <button onClick={handlePagar}
        className="btn btn-success animate__animated animate__fadeIn limpiarboton"
        disabled={loading}> Crear orden </button>
          </div>
        }

          </div>
     
    </div> :
    
    
    
     <div className="contenedor-catalogo animate__animated animate__fadeIn">
            <h1> Orden Final  </h1>
              <hr />


            <div className="cartcarro">
            {carta.map((carta) => (
              
                            <>
                            <div className="disp">
                            <img src={carta.url} className="card-img cardcart" alt= {carta.title}  height='300px'/>  

                            <p className="productocarrito"> ( {carta.cantidad} ) - {carta.title} $ {carta.price * carta.cantidad}
                            
                            </p>   
                            </div>
                          </>
            ) )}
      
                     <div className="fin">
                          <p className="final"> {userInfo.name} tu ID de compra es {id} </p>
                          <p> Porfavor espera a que nos contactemos contigo para entregarte tus productos. </p>
                          <p> Tambien puedes contactarnos por Whatsapp si es que tienes alguna duda </p>
                          
                          <a href="https://wa.me/56962121886?text=Tengo%20una%20duda%20con%20mi%20compra" target="_blank"
                          className="btn btn-info animate__animated animate__fadeIn waza"
                          > Contactar por Whatsapp </a>


                          <button 
                          className="btn btn-success animate__animated animate__fadeIn seguircomprando"
                          onClick={volver}> Seguir comprando </button>
                     </div>


              </div>
        
        </div>
    
    
    }


    </>
    )

    
}
