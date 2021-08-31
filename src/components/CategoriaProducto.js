import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { catalogo } from './Catalogo'
import { Mostrarcat } from './Mostrarcat'

export const CategoriaProducto = () => {

    // const categoria = minecraft ? fortnite : null

//    const Producto.categoria = useParams()

   const categoria = useParams()

   let result = catalogo.filter(catalogo => catalogo.categoria === categoria.categoria)
    

  
   
    return (
        <>
       <div className="contenedor-catalogo animate__animated animate__fadeIn">
       
       <h1> <Link to='/categorias' className="btn btn-dark volver">  Volver </Link> {categoria.categoria}  </h1> 
                    <hr />

       <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn items">

                
                    
                    {
                    result.map((result) => (
                        <Mostrarcat 
                        key={result.id} 
                        {...result}
                        categoria={categoria.categoria}
                        />
                    ) )

                    }
       </div>

       </div>

        </>
    )
}
