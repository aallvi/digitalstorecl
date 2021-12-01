
import React, { useContext } from 'react'
import { ItemList } from './ItemList';
import { cartContext } from './useContext'

export const Items = () => {


    
  const {products} = useContext(cartContext)
   
   
  const destacados = products.filter(productos => productos.destacado === true)

  console.log('destacados',destacados)

  console.log(products)

    
    return (
      <div className="productosdestacados animate__animated animate__fadeIn items ">
        
        {
           destacados.map((Producto) => (
            <ItemList 
            key={Producto.id} 
            {...Producto}
            />
           ) )

        }


      </div>
    );
  }