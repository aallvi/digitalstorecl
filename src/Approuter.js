import React from 'react'
import {
    Switch,
    Route,
    BrowserRouter,
    Link,
    Redirect
  } from "react-router-dom";
import { Cart } from './components/Cart';
import { Categoriaerror } from './components/Categoriaerror';
import { CategoriaProducto } from './components/CategoriaProducto';
import { Categorias } from './components/Categorias';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Nosotros } from './components/Nosotros';
import { Productoerror } from './components/Productoerror';
import whatsapp from './images/whatsapp.png'

export const Approuter = () => {
    return (


        <BrowserRouter>
        <NavBar />


        <Switch>

              <Route exact path="/">
              <ItemListContainer/>
              
              </Route>
              

              
              <Route exact path="/nosotros" component={Nosotros}/>

              <Route exact path="/contacto" component={Contacto}/>

              <Route exact path="/categorias" component={Categorias}/>

              <Route exact path="/category/:categoria" component={CategoriaProducto}/>

              
              
              <Route exact path="/item-detail/:id">
              <ItemDetailContainer />
              </Route>

              <Route exact path="/cart" component={Cart}/>

              <Route path="/producto-no-existe" component={Productoerror} />
              <Route path="/categoria-no-existe" component={Categoriaerror} />



              <Redirect to="/"  />

        

              

              
        </Switch>
        <Footer/>
        
      <Link to={{ pathname: "https://wa.me/56962121886?text=Tengo%20una%20duda%20con%20mi%20compra" }} target="_blank" className="watsap" >   <img src={whatsapp}   alt="watsap" />    </Link>


    
        </BrowserRouter>
    )
}
