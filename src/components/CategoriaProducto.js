import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { catalogo } from './Catalogo'

export const CategoriaProducto = () => {

    // const categoria = minecraft ? fortnite : null

//    const Producto.categoria = useParams()

   const categoria = useParams()

   let result = catalogo.filter(catalogo => catalogo.categoria === categoria.categoria)
    console.log('cat', result)

   const  {id,title,description,url,price,stock} = result[0]

   
    return (
        <>
        <div className="contenedor-catalogo animate__animated animate__fadeIn ">
        
           <h1>  {categoria.categoria} </h1>
           <hr />

           <div className="ms-3 mt-5 animate__animated animate__fadeIn img" style={{maxWidth:440}}>
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
                 Stock :{stock} </p>
           
               <div className="menu-detalles"> </div>
                <Link to="/categorias" className="btn btn-light">  Atras </Link>   
        
                 
                <Link to={`/item-detail/${id}`} className="btn btn-light"> Mas Detalles </Link>
                

              </div>

            
          
          </div>
        </div>
    </div>






        </div>


        </>
    )
}
