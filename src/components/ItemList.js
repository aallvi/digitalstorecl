import React from 'react'
import { Link} from 'react-router-dom'


export const ItemList = ({id,title,description,url,price,stock}) => {
     

     
    
    return (
      

        <div className="ms-3 mt-5 animate__animated animate__fadeIn img" style={{maxWidth:1040}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={url} className="card-img" alt= {title}  height='200px'  />


            </div>
          <div className="col-md-8">
             <div className="card-body"> 
             <h5 className="card-Title"> {title} </h5> 
             <p className="card-text"> 
                 {description} </p>
            <p className="card-text"> 
                 ${price} </p>
                 <p className="card-text"> 
                 Stock: {stock} </p>
           
                
                
                <Link to={`/item-detail/${id}`} className="btn btn-info"> Mas Detalles </Link>
                
                
              </div>

            
          
          </div>
        </div>
    </div>

  
    




    )
}

