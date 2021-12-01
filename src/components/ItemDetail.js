import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { cartContext } from './useContext';



export const ItemDetail = ({description,title,url,price,stock,usar,id}) => {

    const {setCount,addItem,fin} = useContext(cartContext)

    const history = useHistory()

    const goBack = () => {

       
        localStorage.removeItem('result');


        history.goBack()
        setCount(1)
       
    }



    return (
        <>
          <div className="contenedor detail animate__animated animate__fadeIn img detalles" style={{maxWidth:940}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={url} className="card-img" alt= {title}  height='350px' />
               

            </div>
          <div className="col-md-8">
             <div className="card-body"> 
             <h3 className="card-Title"> {title} </h3> 
             <p className="card-text"> 
                 {description} </p>
            <p className="card-text"> 
                Precio: ${price} </p>
             <p className="card-text"> 
                 Stock :{stock} </p>
             <p className="card-text"> 
                 ¿Como se Canjea? {usar} </p>

                 
           
         <div className="menu-detalles">
                  <button className="btn btn-primary"
                  onClick={() => addItem(title,url,price,id)}> 
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
