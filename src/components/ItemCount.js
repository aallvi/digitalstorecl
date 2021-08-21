import React, { Fragment, useState } from 'react'

 const Minecraft = 5

export const ItemCount = () => {

    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(false)
    const [maxStock, setMaxStock] = useState(false)

    
  

   

   const handleAdd = () => {
    
    setCount(count+1)

   

   }

   const handleLess = () => {

    setCount(count-1)
    
   }


   
    

    return (
        <div className="items">
            
            <h1> Minecraft  </h1>

            {/* <button
            className="btn btn-primary"
            onClick={handleLess}
            disabled={stock}
            >     - </button>
                  {count}
            <button
            className="btn btn-primary"
            onClick={handleAdd}
            disabled={maxStock}
            
            >  + </button> */}







            {count}
             
            {  count ===1  ?(
               <Fragment>
                <button 
                            
                className="btn btn-primary"
                onClick= {handleLess}
                disabled> 
                -
                </button>
                <button
                        
                className="btn btn-primary anterior"
                onClick= {handleAdd}> 
                +
                </button>
                </Fragment>
            ) 
            :
              count > 1 && count <Minecraft  ? (
              <Fragment>

                <button 
                            
                            className="btn btn-primary"
                            onClick= {handleLess}> 
                            -
                            </button>
                
                <button 
                        
                className="btn btn-primary anterior"
                onClick= {handleAdd}> 
                +
                </button>
                </Fragment>

            ): count === Minecraft ? (
               <Fragment>
                <button
                            
                            className="btn btn-primary"
                            onClick= {handleLess}> 
                            -
                            </button>
                
                <button 
                        
                className="btn btn-primary anterior"
                onClick= {handleAdd}
                disabled> 
                +
                </button>
                </Fragment>


            ): null
            


            }
           
            
        </div>
    )
}
