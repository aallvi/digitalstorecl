import React from 'react'
import { Carrito } from './Carrito'

export const NavBar = () => {
    return (
       

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
                      <a className="navbar-brand" href="#">Digital Store</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
               <div className="collapse navbar-collapse space" >
                     <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Tienda</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                          </li>
              

                      </ul>

                      <Carrito/>

                   </div>
              </div>
</nav>
            


               
       
    )
}
