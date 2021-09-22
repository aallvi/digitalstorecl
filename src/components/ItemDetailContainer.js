import React, { useContext} from 'react'
import { useParams,Redirect } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { cartContext } from './useContext';

export const ItemDetailContainer = () => {
    const id = useParams()
    const {products} = useContext(cartContext)
    const filt = id.id
  


    let result = products.filter(catalogo => catalogo.id === filt)
   
    console.log(result)
      
    

   
  

   if(result.length === 0){
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
