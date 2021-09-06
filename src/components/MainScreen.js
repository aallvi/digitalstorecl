import React, { useState } from 'react'
import { Approuter } from '../Approuter'

import { collection,getDocs } from '@firebase/firestore'
import { getData } from '../firebase.js'


import { cartContext } from './useContext'

export const MainScreen = () => {

    const [carta, setCarta] = useState([])

    const [count, setCount] = useState(1)

    



    return (
        <>
        
        <cartContext.Provider value= {{
            carta,
            setCarta,
            count,
            setCount
        }}>
        <Approuter />   
        </cartContext.Provider>
        
            
        </>
    )
}
