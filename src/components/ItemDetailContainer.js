import React, { useContext} from 'react'
import { useParams,Redirect } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { cartContext } from './useContext';

export const ItemDetailContainer = () => {
    const {id} = useParams()

    const {products,loading} = useContext(cartContext)
  
    

    let result = products.filter(catalogo => catalogo.id === id)




        if (result.length === 0 && loading === false ) {
            
           return <Redirect to="/producto-no-existe" />
            
         }
        
 

  




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
