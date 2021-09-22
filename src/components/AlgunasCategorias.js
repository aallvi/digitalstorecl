import React from 'react'
import { Link } from 'react-router-dom'


export const AlgunasCategorias = () => {
 


    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn contenedor-portada">
        <h1 className="text-center"> Algunas Categorias </h1>
     
          <div className="contenedor-categorias"> 

          <div className="categorycard mt-5">
          <Link to='/category/Fortnite' className="tarjetascategoria">  <img src="https://cdn2.unrealengine.com/metaimage1-1920x1080-abb60090deaf.png" alt="fortnite" height='200px' width="300px" />
              <p className="text-center mt-1 "> Fortnite </p>
                 </Link> 
          </div>

          <div className="categorycard mt-5">
          <Link to='/category/Minecraft' className="tarjetascategoria">   <img src="https://www.eltiempo.com/files/image_640_428/uploads/2017/12/05/5a26c7add0b52.jpeg" alt="minecraft" height='200px' width="300px" />
              <p className="text-center mt-1 "> Minecraft </p>
              </Link> 

          </div>


          <div className="categorycard mt-5">
          <Link to='/category/PSN Plus' className="tarjetascategoria">  <img src="https://i.blogs.es/0a84fe/ps-plus/1366_2000.jpeg" height='200px' width="300px" alt="psn plus"  />
              <p className="text-center mt-1 "> Psn Plus </p>
              </Link>
          </div>






         </div>

        
    </div>
    )
}