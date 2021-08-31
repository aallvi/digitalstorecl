import React from 'react'
import { useParams } from 'react-router-dom';
import { catalogo } from './Catalogo';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

   const id = useParams()

   

   const filt = id.id


    let result = catalogo.filter(catalogo => catalogo.id === filt)

    

    return (
        <>

        
            <ItemDetail 
            key={result.id} 
            {...result}
            
            
            />
          
        </>
    )
}
