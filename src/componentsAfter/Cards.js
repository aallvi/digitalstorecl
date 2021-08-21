import React, { useEffect, useState } from 'react'
import { Texto } from './Texto'


export const Cards = () => {


    const cardArray = [{ 
      user: 'Alvaro',
      carrer: 'React',
      description: 'Feliz de hacer el curso'

    },

    { 
      user: 'Farias',
      carrer: 'UX/UI',
      description: 'Me gusto Mucho'

    },

    { 
        user: 'Vale',
        carrer: 'R studio',
        description: 'aguante mi fredes'
  
    }

]

    const [card, setCard] = useState([])

    const [loading, setLoading] = useState(false)

    

    useEffect(() => {
        setLoading(true)

         setTimeout(() => {
            setCard(cardArray)
            setLoading(false)
             
         }, 3000);
            


    }, [])

    if(loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <table border="3">

            {/* <p> {card[0].user} </p> */}
            {
             cardArray.map(cards => (

                <div> 
                    
                    <p>{cards.user}</p> 

                    <p>{cards.carrer}</p> 

                    <p>  {cards.description}</p> 
                   <hr/>
                
                 </div>
                
              ))

            }

        </table>
    )
}
