import React from 'react'
import { Link } from 'react-router-dom'
import bag from '../images/bag.png'

export const Carrito = () => {
    "/cart"
    
    return (
        <div className="carrito">
         <Link to="/cart">  <img src={bag} alt="carrito" width="33" height="33"/>  </Link> 
        </div>
    )
}
