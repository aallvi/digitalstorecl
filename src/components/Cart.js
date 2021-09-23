import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { cartContext } from './useContext'
import { collection, addDoc } from "firebase/firestore";
import { getData } from '../firebase.js';
import moment from 'moment';
import swal from 'sweetalert';




export const Cart = () => {
    

    const {carta,setCarta}            = useContext(cartContext)
    const [cartafinal, setCartafinal] = useState([])
    const [loading, setLoading]       = useState(false)
    const [listo, setListo]           = useState(false)
    const [id, setId]                 = useState("")
    const [nombre, setNombre]         = useState('')
    const [email, setEmail]           = useState('')
    const [remail, setRemail]           = useState('')
    const [telefono, setTelefono]     = useState('')
    const [invalid, setInvalid] = useState(false)

    const onNombreChange =(e) => {
          setNombre(e.target.value)
        }

    const onEmailChange =(e) => {
          setEmail(e.target.value)
        }

        const onRemailChange =(e) => {
          setRemail(e.target.value)
        }

    const onTelefonoChange =(e) => {
          setTelefono(e.target.value)
        }
    
        let history  = useHistory()
        const apagar = carta.reduce((sum,value) => (sum + value.total), 0)  

    const userInfo ={
      name: nombre,
      mail: email,
      phone: telefono
    }
  
    const handleDelete = (id)=> {
      setCarta( carta.filter(carta => carta.id !== id)) 

    }

    const handleClear = () => {
      setCarta([])
      
    }
    
    const handlePagar = async () => {

      if( nombre === '' || email === '' || telefono === '' || remail === '' || email !== remail){

        return setInvalid(true)


      }
         setInvalid(false)



      setLoading(true)
      const docRef = await addDoc(collection(getData(), "orders"), {
        cliente: userInfo,
        item : carta,
        total: apagar,
        fecha: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
     
      setId(docRef.id)

      console.log("Document written with ID: ", docRef.id);

      swal("¡Orden Creada!", `${userInfo.name} el ID de tu orden es "${docRef.id}".
           Porfavor guardalo y espera a que nos contactemos contigo!`, "success");
           setListo(true)

           setCartafinal(carta)
        
        setCarta([])
     
    }

    const pagarfinal = cartafinal.reduce((sum,value) => (sum + value.total), 0)

    const volver = () => {
      history.push("/")

      setCarta([])
    }
    
 

    
   
    return (
      <>

      {
      
      listo === false ?
      
      <div className="animate__animated animate__fadeIn contenedor">
        <h1 className="text-center carttitle mt-15"> Carrito {carta.length === 0 ? null :  <button onClick={handleClear}
          className="btn btn-danger animate__animated animate__fadeIn pago">  Limpiar Carrito </button>} </h1>
         


        <div className="cartcarro">
          
          <div className="carritofinal">

          {carta.length === 0 ?

              <div className="carrito-vacio">
                      <p className="animate__animated animate__fadeIn carro">
                          Carrito Vacio
                    
                      </p> 

                        <Link className="btn btn-primary found" to="/"> Buscar Productos </Link>
              </div>

         :   carta.map((carta) => (
          
                    
                       
                            <div className="disp" key={carta.id}>
                                        <img src={carta.url} className="" alt= {carta.title} width="140px"  height='200px'/>  

                                        <p className="productocarrito"> ( {carta.cantidad} ) - {carta.title} $ {carta.price * carta.cantidad}
                                        
                                        <button onClick={ () => handleDelete(carta.id)}
                                        className="btn btn-warning"
                                        > x </button>  </p>   
                            </div>
                            



                            
                      
        ) )}
          </div>

        {carta.length ===0 ? null :
          <form className="form">
            <p className="tituloform"> <span>Ingresa</span>  tus datos para contactarnos contigo y entregarte tu compra </p>
                         
                    {invalid ? <p className="validar">  Debes rellenar todos los campos y los emails deben ser iguales </p> : null }
                         
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tu email"
                            onChange={e => onEmailChange(e)} />
                            </div>

                            <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Re escribe tu Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Tu email"
                            onChange={e => onRemailChange(e)} />
                            
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleName1">Nombre</label>
                            <input type="text" className="form-control" id="name" placeholder="Tu nombre"
                            onChange={e => onNombreChange(e)}  />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleTelefono">Telefono</label>
                            <input type="text" className="form-control" id="telefono" placeholder="+56 9 64345513"
                            onChange={e => onTelefonoChange(e)}   />
                          </div>
          
    
          </form>
          
        }


      

          </div>

          {carta.length ===0 ? null :
          <div className="total" >
                <p>Total: <span> ${apagar}</span> </p>
                
                <button onClick={handlePagar}
                className="btn btn-success animate__animated animate__fadeIn ordenbtn"
                disabled={loading}> Crear orden </button>
          </div>
          
        }
     
    </div> :   
    
    
    
     <div className="animate__animated animate__fadeIn contenedor">
            <h1 className="text-center"> Orden Final  </h1>
              


            <div className="cartcarro">
              <div>
            {cartafinal.map((carta) => (
              
                            <>
                            <div className="disp">
                            <img src={carta.url} className="" alt= {carta.title} width="140px" height='200px'/>  

                            <p className="productocarrito"> ( {carta.cantidad} ) - {carta.title} $ {carta.price * carta.cantidad}
                            
                            </p>   
                            </div>
                            
                          </>
            ) )}
            <div className="totalfinal">
                <p className="pagofinal">Total: <span> ${pagarfinal}</span> </p>
               
          </div>
            </div>
      
                     <div className="fin">
                          <p className="final"> {userInfo.name} tu ID de compra es <span>"{id}"</span>  </p>
                          <p> Porfavor espera a que nos contactemos contigo para entregarte tus productos. </p>
                          <p> Tambien puedes contactarnos por Whatsapp si es que tienes alguna duda </p>
                          
                          
                          <a href="https://wa.me/56962121886?text=Tengo%20una%20duda%20con%20mi%20compra"  target="_blank" className="btn btn-info animate__animated animate__fadeIn waza"> Contactar por Whatsapp </a>


                          <button 
                          className="btn btn-success animate__animated animate__fadeIn seguircomprando"
                          onClick={volver}> Seguir comprando </button>
                     </div>
                     

              </div>
        
        </div>
    
    
    }


    </>
    )

    
}


