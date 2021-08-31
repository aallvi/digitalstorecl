import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import swal from 'sweetalert';
import { cartContext } from './useContext';


export const ItemDetail = (result) => {


    const {carta,setCarta,count,setCount} = useContext(cartContext)

    

    let {description,title,url,price,stock,usar,vencimiento,id} =  result[0]

    const [fin, setFin] = useState(false)

     const agregado = ()=> {

       let arr = carta.find(elemento => elemento.id === id)

       if (arr) {
           return swal("Agregado", ` ${title} Ya fue añadido al carrito`, "warning");
       }

    

        swal("¡Listo!", ` (${count}) ${title} agregado al carrito!`, "success");

        setFin(true)

        const cantidad = count

        setCarta(
            [...carta, 
                {title,
                    id,
                    url,
                    cantidad,
                    price
                }])

        setCount(1)

     }
    

    




    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    
 
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
                
                

              <button className="btn btn-light atras"
              onClick={goBack}>
                 Atras 
              </button>
                

                
         </div>


              </div>

            
          
          </div>
        </div>
    </div>
            
        </>
    )
}
