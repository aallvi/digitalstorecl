import React from 'react'
import { Link } from 'react-router-dom'


export const Categorias = () => {
 


    return (
        <div className="contenedor-catalogo animate__animated animate__fadeIn">
        <h1> ¿Que estas buscando? </h1>
     <hr />
          <div className="contenedor-categorias"> 

               <button type="button" className="btn btn-light"><Link to='/category/Fortnite' className="btn btn-light">  Fortnite </Link>   </button> 
               <button type="button" className="btn btn-light"><Link to='/category/Minecraft' className="btn btn-light">  Minecraft </Link>   </button> 
               <button type="button" className="btn btn-light"><Link to='/category/PSN Plus' className="btn btn-light">  PSN Plus </Link>   </button>
               <button type="button" className="btn btn-light"><Link to='/category/Insanity' className="btn btn-light">  Insanity </Link>   </button>
         </div>

        
    </div>
    )
}

