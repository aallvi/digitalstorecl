import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <footer className="site-footer animate__animated animate__fadeIn mt-10">
 
        <div className="grid-footer contenedor-footer ">


                    <div>
                        <h3>Categorias</h3>


                        <nav className="footer-menu">
                        <Link to='/category/Fortnite' className="a">  Fortnite </Link>
                        <Link to='/category/Minecraft' className="a">  Minecraft </Link>
                        <Link to='/category/PSN Plus' className="a">  PSN Plus </Link>
                        <Link to='/category/Cursos y Videos descargables' className="a">  Cursos y Videos descargables </Link>

                        </nav>

                    </div>

                    <div>
                        <h3>Digital Store</h3>

                        <nav className="footer-menu">
                            <Link to="/nosotros"  className="a">Nosotros</Link>
                            <Link  className="a"> Mision, Vision y Valores </Link>
               

                        </nav>


                    </div>

                    <div>
                        <h3>Soporte</h3>
                    <nav className="footer-menu">
                            <Link to="/contacto" className="a">Contacto </Link>
                            <Link className="a"> Preguntas Frecuentes </Link>
        
                    
                    </nav>
                    </div>

             </div>

        <p className="text-center mt-5"> Todos Los derechos Reservados <span>Digital Store</span> </p>

            
        </footer>
    )
}
