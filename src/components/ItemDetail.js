import React from 'react'
import { Link } from 'react-router-dom'


export const ItemDetail = (result) => {



    
    
    let {description,title,url,price,stock,usar,vencimiento} =  result[0]
    
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
           
                
        
                <Link to="/"> Atras </Link>
              </div>

            
          
          </div>
        </div>
    </div>
            
        </>
    )
}
