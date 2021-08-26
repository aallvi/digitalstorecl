import React, { Fragment, useState } from 'react'

 

export const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1)
    // const [stock, setStock] = useState(false)
    const [maxStock, setMaxStock] = useState(false)

    

    
   console.log(count)

   const handleAdd = () => {
    
    setCount(count+1)

   

   }

   const handleLess = () => {

    setCount(count-1)
    
   }


   
    

    return (
        <div className="items">
            
            <p className="cantidad">{count}</p>  

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
              count > 1 && count <stock  ? (
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

            ): count === stock ? (
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
