import React from 'react'

import { Items } from './Items'

export const ItemListContainer = () => {
    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn">
         <h1> Productos Destacados </h1>
         <hr />

          <Items/>

          {/* <img src={catalogo} alt="catalogo" width="950" height="450"/> */}

          {/* <ItemCount/> */}

            
            
        </div>
    )
}
