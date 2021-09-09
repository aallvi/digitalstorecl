import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Mostrarcat } from './Mostrarcat'
import { cartContext } from './useContext'


export const CategoriaProducto = () => {

    
  const {products} = useContext(cartContext)
    
    
   const categoria = useParams()


   let result = products.filter(catalogo => catalogo.categoria === categoria.categoria)
    

  
   
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
                        categoria={categoria}
                        />
                    ) )

                    }
       </div>

       </div>

        </>
    )
}
