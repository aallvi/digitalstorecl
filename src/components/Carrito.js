import React from 'react'
import { Link } from 'react-router-dom'
import bag from '../images/bag.png'

export const Carrito = () => {
    "/cart"
    
    return (
        <div className="carrito">
         <Link to="/cart">  <img src="https://i.ibb.co/4mm1pYQ/bag.png" alt="carrito" width="33" height="33"/>  </Link> 
        </div>
    )
}
