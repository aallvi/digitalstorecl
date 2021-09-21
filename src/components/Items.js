
import React, { useContext } from 'react'
import { ItemList } from './ItemList';
import { cartContext } from './useContext'

export const Items = () => {


    
  const {products} = useContext(cartContext)

    
    return (
      <div className="productosdestacados animate__animated animate__fadeIn items ">
        
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