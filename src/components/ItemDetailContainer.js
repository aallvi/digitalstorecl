import React from 'react'
import { useParams } from 'react-router-dom';
import { catalogo } from './Catalogo';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

   const id = useParams()

   console.log('id', id)

   const filt = id.id


    let result = catalogo.filter(catalogo => catalogo.id === filt)

    console.log('result', result)

    return (
        <>

        
            <ItemDetail 
            key={result.id} 
            {...result}
            
            
            />
          
        </>
    )
}
