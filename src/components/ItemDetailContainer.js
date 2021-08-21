import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = ({id}) => {

 

    const [detalles, setDetalles] = useState([])

    useEffect(() => {
        new Promise((resolve, reject) => {
          ///
          const data = [
            {
              id: "1",
              Howuse: 'Al comprar te entregamos un codigo que debes canjear en minecraft.net'
            },
            {
              id: "2",
              Howuse: 'Al comprar te entregamos un codigo que tu debes canjear en la store de tu ps4.'
            }
            
          ];
          setTimeout(() => resolve(data), 2000);
  
        })
          .then((dataResolve) => {
            
            setDetalles(dataResolve);
          })
          .catch((error) => {
            console.log("err", error);
          });
  
      }, []);



    return (
        <>
            <ItemDetail 
            key={detalles.id} 
            {...detalles}
            id={id}
            />
          
        </>
    )
}
