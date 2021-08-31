import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { catalogo } from './Catalogo'


export const Categorias = () => {

    //  const minecraft =  catalogo[0].categoria
    //  const fortnite =  catalogo[1].categoria

    const [products, setProducts] = useState([]);

    useEffect(() => {
      new Promise((resolve, reject) => {
       
        setTimeout(() => resolve(catalogo), 1);

      })
        .then((dataResolve) => {
         
          setProducts(dataResolve);
        })
        .catch((error) => {
          console.log("err", error);
        });

    }, []);

 


    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn">
        <h1> ¿Que estas buscando? </h1>
     <hr />
          <div className="contenedor-categorias"> 

               <button type="button" className="btn btn-light"><Link to='/category/Fortnite' className="btn btn-light">  Fortnite </Link>   </button> 
               <button type="button" className="btn btn-light"><Link to='/category/Minecraft' className="btn btn-light">  Minecraft </Link>   </button> 
               <button type="button" className="btn btn-light"><Link to='/category/PSN Plus' className="btn btn-light">  PSN Plus </Link>   </button>
         </div>

        
    </div>
    )
}

