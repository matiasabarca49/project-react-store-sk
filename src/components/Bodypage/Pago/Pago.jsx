import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContex'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import EstadoCompra from './EstadoCompra.jsx'
import ModalCarga from './ModalCarga'
import './Pago.css'

const Pago = () => {

  const { cart, total, vaciarCarrito } = useContext(CartContext)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [direccion, setDireccion] = useState("")
  const [metodoPago, setMetodoPago] = useState()
  const [infoOrden, setInfoOrden] = useState()
  const [compraRealizada, setCompraRealizada] = useState(false)
  const [esperandoPago, setEsperandoPago] = useState(false)


  const enviarCompra = ( ) => {

    setEsperandoPago(true)
  
    const orden ={
      comprador: {  nombre: nombre, apellido: apellido, email: email, direccion: direccion },
      compra: cart,
      metodo: metodoPago,
      total: total + 1999
    }

    setInfoOrden(orden)

    const db = getFirestore()

    const comprasCollection = collection(db, "compras")
    addDoc(comprasCollection, orden).then( ( doc )=> {
      console.log("Orden enviada // ID: ", doc.id)
      setCompraRealizada(true)
      vaciarCarrito()
      setEsperandoPago(false)
    }  )

  
  }


  return (
    <>
        {compraRealizada

          ? <EstadoCompra orden={ infoOrden } />
          
          :  
          <div className='contPago'>
            {esperandoPago &&  <ModalCarga />}
            <h1>Total Compra:</h1>
            <h2>${total + 1999}</h2>
            <form className='form' onSubmit={ (e ) => {e.preventDefault()} }>
              <div className='formInfo'>
                <div className='formNames'>
                  <div>
                      <label> Nombre </label>
                      <input type="text"  onChange={ ( e )=> setNombre(e.target.value)  } value={ nombre } required/>
                  </div>
                  <div> 
                    <label> Apellido </label>
                    <input type="text" onChange={ ( e )=> setApellido(e.target.value) } value = { apellido} required />
                  </div>
                </div>
                <div>
                  <label>Email</label>
                  <input type="email"  onChange={ ( e )=> setEmail(e.target.value)} value={ email} required/>
                </div>
                <div>
                  <label>Direccion</label>
                  <input type="text"  onChange={ ( e )=> setDireccion(e.target.value)} value={ direccion } required/>
                </div>
              </div>
              <div className='checkMetodoPago'>
                <h4> Metodo de Pago:</h4>
                <input type="radio" id='pago1' name='mPago' onChange={ () => setMetodoPago("Efectivo")} required/>
                <label htmlFor='pago1'>Efectivo</label>
                <input type="radio" id='pago2' name='mPago'  onChange={ () => setMetodoPago("Credito")} required/>
                <label htmlFor='pago2' >Credito</label>
                <input type="radio" id='pago3' name='mPago' onChange={ () => setMetodoPago("Debito")} required/>
                <label htmlFor='pago3' >Debito</label>
              </div>
              {metodoPago
                
                ?<input type="submit" onClick={ enviarCompra } className='btn btnPrimarioColoreado' value="Comprar" /> 
                : <button > Comprar</button> 
              }
            </form>
          </div>
        }
      </>
  )
}

export default Pago