import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import swal from 'sweetalert';


export const ItemDetail = (result) => {

    let {description,title,url,price,stock,usar,vencimiento} =  result[0]

    const [fin, setFin] = useState(false)

     const agregado = ()=> {
        swal("¡Listo!",  `${title} agregado al carrito!`, "success");

        setFin(true)
     }
    
     
    
    
    // console.log(id)
 
    return (
        <>
          <div className="ms-3 mt-5 animate__animated animate__fadeIn img detalles" style={{maxWidth:940}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={url} className="card-img" alt= {title}  height='300px' />


            </div>
          <div className="col-md-8">
             <div className="card-body"> 
             <h5 className="card-Title"> {title} </h5> 
             <p className="card-text"> 
                 {description} </p>
            <p className="card-text"> 
                 ${price} </p>
             <p className="card-text"> 
                 Stock :{stock} </p>
             <p className="card-text"> 
                 ¿Como se Canjea? {usar} </p>

                 <p className="card-text"> 
                  {vencimiento} </p>
           
         <div className="menu-detalles">
                  <button className="btn btn-light"
                  onClick={agregado}> 
                 Agregar al carrito 
                </button>
                
                <ItemCount stock={stock} /> 
                
               
                {fin ? <Link to="/cart" className="btn btn-success finalizar"> Finalizar Compra</Link> : null}
                
                

              
                <Link to="/" className="btn btn-light atras"> Atras </Link>

                

                
         </div>


              </div>

            
          
          </div>
        </div>
    </div>
            
        </>
    )
}
