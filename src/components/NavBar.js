import React from 'react'
import { Link } from 'react-router-dom'
import { Carrito } from './Carrito'


export const NavBar = () => {
    return (
    

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
                      <Link className="navbar-brand" exact to="/" >Digital Store</Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
               <div className="collapse navbar-collapse space" >
                     <ul className="navbar-nav">
                          <li className="nav-item">
                          <Link className="nav-item nav-link"
                                exact to="/"
                          
                          >
                             Home
                          </Link>
                          </li>
                          <li>
                          <Link className="nav-item nav-link"
                                exact to="/categorias"
                          
                          >
                             Categorias
                          </Link></li>
                          
                          <li>
                          <Link className="nav-item nav-link"
                                exact to="/nosotros"
                          
                          >
                             Nosotros
                          </Link></li>
                          <li>
                          <Link className="nav-item nav-link"
                                exact to="/contacto"
                          
                          >
                             Contacto
                          </Link></li>


                      

                      </ul>

                      <Carrito/>

                   </div>
              </div>
              
</nav>


               
       
    )
}
