import React from 'react'
import { Link } from 'react-router-dom'



export const OrdenFinal = (cartafinal,pagarfinal,volver,userInfo,id) => {

   


    return (
        <div className="animate__animated animate__fadeIn contenedor">
        <h1 className="text-center"> Orden Final  </h1>
          


        <div className="cartcarro">
          <div>

        {cartafinal.map((carta) => (
          
                        <>
                        <div className="disp">
                        <img src={carta.url} className="" alt= {carta.title} width="140px" height='200px'/>  

                        <p className="productocarrito"> ( {carta.cantidad} ) - {carta.title} $ {carta.price * carta.cantidad}
                        
                        </p>   
                        </div>
                        
                      </>
        ) )}


        <div className="totalfinal">
            <p className="pagofinal">Total: <span> ${pagarfinal}</span> </p>
           
      </div>
        </div>
  
                 <div className="fin">
                      <p className="final"> {userInfo.name} tu ID de compra es <span>"{id}"</span>  </p>
                      <p> Porfavor espera a que nos contactemos contigo para entregarte tus productos. </p>
                      <p> Tambien puedes contactarnos por Whatsapp si es que tienes alguna duda </p>
                      
                      
                      <Link to={{ pathname: "https://wa.me/56962121886?text=Tengo%20una%20duda%20con%20mi%20compra" }} target="_blank"
                      className="btn btn-info animate__animated animate__fadeIn waza"
                      > Contactar por Whatsapp </Link>


                      <button 
                      className="btn btn-success animate__animated animate__fadeIn seguircomprando"
                      onClick={volver}> Seguir comprando </button>
                 </div>
                 

          </div>
    
    </div>
    )
}
