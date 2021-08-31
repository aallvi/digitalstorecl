import React, { useContext } from 'react'
import { cartContext } from './useContext'

export const Cart = () => {

    

    const {carta,setCarta,count,setCount} = useContext(cartContext)


    const handleDelete = (id)=> {

      setCarta( carta.filter(carta => carta.id !== id)) 

    }

    const handleClear = () => {

      setCarta([])
      
    }


    const handlePagar = () => {
      console.log('object')
    }
    
    
   
    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn">
        <h1> Carrito {carta.length === 0 ? null :  <button onClick={handleClear}
          className="btn btn-danger animate__animated animate__fadeIn pago">  Limpiar Carrito </button>} </h1>
     <hr />


        <div className="cartcarro">
          {carta.length === 0 ? <p className="animate__animated animate__fadeIn carro"> Carrito Vacio </p> : carta.map((carta) => (
          
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
           
        carta.length === 0 ? null :  <button onClick={handlePagar}
        className="btn btn-success animate__animated animate__fadeIn limpiarboton">  Ir al pago </button>
          
        }

          </div>
     
    </div>
    )
}
