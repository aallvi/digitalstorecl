import { Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import { AlgunasCategorias } from './AlgunasCategorias'
import { Footer } from './Footer'

import { Items } from './Items'

export const ItemListContainer = () => {

 

    return (

        <>
      
        
         <div className="contenedor-catalogo animate__animated animate__fadeIn contenedor">
         
         {/* <a className="mercado" href="https://listado.mercadolibre.cl/_CustId_46953547?item_id=MLC624248063&category_id=MLC159270&seller_id=46953547&client=recoview-selleritems&recos_listing=true" target="_blank" >  <img src="https://res.cloudinary.com/asdsa/image/upload/v1638372615/mercadolibre_dnunxy.jpg" alt="logo" width="200" height="90"/>  </a>u */}
         
         <h1 className="text-center"> Productos Destacados </h1>    
         

          <Items/>

        </div>


        <AlgunasCategorias/>



        </>
    )
}
