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

    console.log(products)


    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn">
        <h1> ¿Que estas buscando? </h1>
     <hr />
        {
           products.map((Producto) => (

               <button type="button" className="btn btn-light"><Link to={`/category/${Producto.categoria}`} className="btn btn-light">  {Producto.categoria} </Link>   </button> 

           ) )

        }
    </div>
    )
}
