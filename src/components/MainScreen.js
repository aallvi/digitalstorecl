import React, { useEffect, useState } from 'react'
import { Approuter } from '../Approuter'

import { collection,getDocs } from '@firebase/firestore'
import { getData } from '../firebase.js'


import { cartContext } from './useContext'

export const MainScreen = () => {


   

    const [carta, setCarta] = useState(JSON.parse(localStorage.getItem('carta')) || [])

    const [count, setCount] = useState(1)

    const [products, setProducts] = useState([]);

    const [orden, setOrden] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {

       
        const getProduct = async () => {
          const productsCollection = collection(getData(), 'Producto' );
          const productsSnapshot = await getDocs(productsCollection) ;
          const productsList = productsSnapshot.docs.map(doc =>  ({id:doc.id, ...doc.data()}) );
          
          setProducts(productsList)
          
          setLoading(false)
        };
          getProduct();

         
       }, [])

    useEffect(() => {

       
            localStorage.setItem('carta', JSON.stringify(carta))

       

    }, [carta])


    return (
        <>
        
        <cartContext.Provider value= {{
            carta,
            setCarta,
            count,
            setCount,
            products,
            setProducts,
            orden,
            setOrden,
            loading,
            setLoading
        }}>
        <Approuter />   
        </cartContext.Provider>
        
            
        </>
    )
}
