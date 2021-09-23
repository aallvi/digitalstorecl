import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Carrito } from './Carrito'
import { cartContext } from './useContext'


export const NavBar = () => {
      

      const {carta} = useContext(cartContext)


     const totalcompra = carta.reduce((sum,value) => (sum + value.cantidad), 0) 

     

    return (
    

  <nav className="navbar navbar-expand-lg navbar-black bg-black contenedor-footer">
          <div className="container-fluid">
                      <Link className="navbar-brand white" exact to="/" >   <img src="https://i.ibb.co/rw5s0By/logo.jpg" alt="logo" width="130" height="90"/>    </Link>
                   
               <div className="collapse navbar-collapse barr" >
                     <ul className="navbar-nav barra">
                          <li className="">
                          <Link className="nav-link"
                                exact to="/"
                          
                          >
                             Home
                          </Link>
                          </li>
                          <li>
                          <Link className=" nav-link"
                                exact to="/categorias"
                          
                          >
                             Categorias
                          </Link></li>
                          
                          <li>
                          <Link className="nav-link"
                                exact to="/nosotros"
                          
                          >
                             Nosotros
                          </Link></li>
                          <li>
                          <Link className="nav-link"
                                exact to="/contacto"
                          
                          >
                             Contacto
                          </Link></li>


                      

                      </ul>

                      <Carrito/> 
                      {carta.length === 0 ? null : <p className="bagg"> ({totalcompra}) </p> } 

                   </div>
              </div>
              
</nav>


               
       
    )
}
