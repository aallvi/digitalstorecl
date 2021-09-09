import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { cartContext } from './useContext';

export const ItemDetailContainer = () => {



   const id = useParams()

   const filt = id.id

   const {products} = useContext(cartContext)

    let result = products.filter(catalogo => catalogo.id === filt)

    

    return (
        <>

        
            <ItemDetail 
            key={result.id} 
            {...result}
            
            
            />
          
        </>
    )
}
