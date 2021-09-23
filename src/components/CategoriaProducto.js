import React, { useContext } from 'react'
import { useParams, useHistory,Redirect } from 'react-router-dom'
import { Mostrarcat } from './Mostrarcat'
import { cartContext } from './useContext'


export const CategoriaProducto = () => {

    
  const {products,loading} = useContext(cartContext)
  const history = useHistory()

  const goBack = () => {
      history.goBack()
  }

    
   const {categoria} = useParams()


   let result = products.filter(catalogo => catalogo.categoria === categoria)

   if (result.length === 0 && loading === false ) {
            
    return <Redirect to="/categoria-no-existe" />
     
  }
    
   


    return (
        <>

        {result.length === 0 ? null : 
        
        <>   <div className=" contenedor-catalogo animate__animated animate__fadeIn contenedor cont">
       
       <h1 className="text-center"> <button onClick={goBack} className="btn btn-light volver">  Volver </button>  {categoria}  </h1> 
                   

       <div className="productosdestacados animate__animated animate__fadeIn items">

                
                    
                    {
                    result.map((result) => (
                        <Mostrarcat 
                        key={result.id} 
                        {...result}
                        
                        />
                    ) )

                    }
       </div>

       </div>

        </>}

        </>
      
    )
}
