import React, { useEffect, useState } from 'react'
import { Approuter } from '../Approuter'

import { collection,getDocs } from '@firebase/firestore'
import { getData } from '../firebase.js'
import swal from 'sweetalert';


import { cartContext } from './useContext'

export const MainScreen = () => {


   

    const [carta, setCarta] = useState(JSON.parse(localStorage.getItem('carta')) || [])

    const [count, setCount] = useState(1)

    const [products, setProducts] = useState([]);

    const [orden, setOrden] = useState({})

    const [loading, setLoading] = useState(true)
    const [fin, setFin] = useState(false)

    useEffect(() => {

        
          const getProduct = async () => {
            const productsCollection = collection(getData(),'Producto');
            const productsSnapshot = await getDocs(productsCollection) ;
            const productsList = productsSnapshot.docs.map(doc =>  ({id:doc.id, ...doc.data()}) );
            
            setProducts(productsList)
            
            setLoading(false)
          };
            getProduct();
             
         
       }, [])

    useEffect(() => {

       
            localStorage.setItem('carta', JSON.stringify(carta))

       if(carta.length === 0){
         setFin(false)
       }

    }, [carta])


    const handleDelete = (id)=> {
          const limpiarCarta = [...carta]
          const cartaLimpiar = limpiarCarta.filter(carta => carta.id !== id)
          setCarta(cartaLimpiar)
          
  
      }

      const handleClear = () => {
            setCarta([])
        
      }


      const addItem = (title,url,price,id)=> {

            let arr = carta.find(elemento => elemento.id === id)

            const cantidad = count

            console.log('qe mierda',arr)
            

            if (arr) {

                const nuevaCantidad = arr.cantidad + count

                const newcart = carta.filter(elemento => elemento.id !== id)
                    
                    setCarta(
                        [...newcart, 
                            {title,
                                id,
                                url,
                                cantidad:nuevaCantidad,
                                price,
                                total: nuevaCantidad * price
                                
                            }])


                swal("¡Listo!", ` (${count}) ${title} agregado al carrito!`, "success");

                setFin(true)
                setCount(1)
                return  
            }




                swal("¡Listo!", ` (${count}) ${title} agregado al carrito!`, "success");

                setFin(true)


                setCarta(
                    [...carta, 
                        {title,
                            id,
                            url,
                            cantidad,
                            price,
                            total: cantidad * price
                            
                        }])

                setCount(1)
               
        }


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
            setLoading,
            handleDelete,
            handleClear,
            addItem,
            fin,
            setFin
            
        }}>
        <Approuter />   
        </cartContext.Provider>
        
            
        </>
    )
}
