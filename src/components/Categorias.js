import React from 'react'
import { Link } from 'react-router-dom'


export const Categorias = () => {
 


    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn contenedor-portada">
        <h1 className="text-center"> ¿Que estas buscando? </h1>
     
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
          <Link to='/category/PSN Plus' className="tarjetascategoria">  <img src="https://i.blogs.es/0a84fe/ps-plus/1366_2000.jpeg" height='200px' width="300px"  alt="psn plus" />
              <p className="text-center mt-1 "> Psn Plus </p>
              </Link>
          </div>

          <div className="categorycard mt-5">
          <Link to='/category/Roblox' className="tarjetascategoria">  <img src="https://i0.wp.com/www.mundoplayers.com/wp-content/uploads/2019/11/d66ae37d46e00a1ecacfe9531986690a.jpg?fit=770%2C404&ssl=1" height='200px' width="300px"  alt="psn plus" />
              <p className="text-center mt-1 "> Roblox </p>
              </Link>
          </div>


          <div className="categorycard mt-5">
          <Link to='/category/Cursos y Videos descargables' className="tarjetascategoria">  <img src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="cursos descargables" height='200px' width="300px" />
              <p className="text-center mt-1 "> Cursos y Videos descargables </p>
              </Link>
          </div>






         </div>

        
    </div>
    )
}


{/* 
               <button type="button" className="btn btn-light"><Link to='/category/Fortnite' className="btn btn-light">  Fortnite </Link>   </button> 
               <button type="button" className="btn btn-light"><Link to='/category/Minecraft' className="btn btn-light">  Minecraft </Link>   </button> 
               <button type="button" className="btn btn-light"><Link to='/category/PSN Plus' className="btn btn-light">  PSN Plus </Link>   </button>
               <button type="button" className="btn btn-light"><Link to='/category/Cursos y Videos descargables' className="btn btn-light">  Cursos y Videos descargables </Link>   </button> */}
