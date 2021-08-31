import React, { useEffect, useState } from 'react'
import { catalogo } from './Catalogo';
import { ItemList } from './ItemList';



export const Items = () => {


    
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
      <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn items ">
        
        {
           products.map((Producto) => (
            <ItemList 
            key={Producto.id} 
            {...Producto}
            />
           ) )

        }


      </div>
    );
  }