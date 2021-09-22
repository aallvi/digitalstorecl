import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { cartContext } from './useContext';

export const ItemDetailContainer = () => {

    const {products} = useContext(cartContext)

   const id = useParams()

   const filt = id.id


    let result = products.filter(catalogo => catalogo.id === filt)

        useEffect(() => {

        
            localStorage.setItem('result', JSON.stringify(result))

    

        }, [result])


    return (
        <>


                  {
                    result.map((result) => (
                        <ItemDetail 
                        key={result.id} 
                        {...result}
                        
                        />
                    ) )

                    }
          
        </>
    )
}
