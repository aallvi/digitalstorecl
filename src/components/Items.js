
import React, { useContext } from 'react'
import { ItemList } from './ItemList';
import { cartContext } from './useContext'

export const Items = () => {


    
  const {products} = useContext(cartContext)

    
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