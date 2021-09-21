import React from 'react'

import { AlgunasCategorias } from './AlgunasCategorias'

import { Items } from './Items'

export const ItemListContainer = () => {

 

    return (

        <>
      
        
         <div className="contenedor-catalogo animate__animated animate__fadeIn contenedor cont">
         <h1 className="text-center"> Productos Destacados </h1>
      

          <Items/>

        </div>


        <AlgunasCategorias/>

        </>
    )
}
