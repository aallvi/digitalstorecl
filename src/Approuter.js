import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
import { Cart } from './components/Cart';
import { CategoriaProducto } from './components/CategoriaProducto';
import { Categorias } from './components/Categorias';
import { Contacto } from './components/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer';

import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Nosotros } from './components/Nosotros';

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

        
        </Switch>
      
            
        </BrowserRouter>
    )
}
