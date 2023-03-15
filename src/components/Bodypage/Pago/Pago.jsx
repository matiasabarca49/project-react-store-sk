import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContex'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import EstadoCompra from './EstadoCompra.jsx'

const Pago = () => {

  const { cart, total, vaciarCarrito } = useContext(CartContext)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [metodoPago, setMetodoPago] = useState()
  const [compraRealizada, setCompraRealizada] = useState(false)


  const enviarCompra = ( ) => {
  
    const orden ={
      comprador: {  nombre: nombre, apellido: apellido, email: email },
      compra: cart,
      metodo: metodoPago,
      total: total + 1999
    }

    console.log(orden)

    const db = getFirestore()

    const comprasCollection = collection(db, "compras")
    addDoc(comprasCollection, orden).then( ( doc )=> {
      console.log("Orden enviada // ID: ", doc.id)
      setCompraRealizada(true)
      vaciarCarrito()
    }  )


  }

  return (
    <div>
        {compraRealizada

          ? <EstadoCompra />
          
          :  <form onSubmit={ (e ) => {e.preventDefault()} }>
              <div>
                <label> Nombre </label>
                <input type="text"  onChange={ ( e )=> setNombre(e.target.value)  } value={ nombre }/>
                <label> Apellido </label>
                <input type="text" onChange={ ( e )=> setApellido(e.target.value) } value = { apellido} />
              </div>
              <div>
                <label>Email</label>
                <input type="email"  onChange={ ( e )=> setEmail(e.target.value)} value={ email}/>
              </div>
              <div>
                <h2> Metodo de Pago</h2>
                <label htmlFor='pago1'>Efectivo</label>
                <input type="radio" id='pago1' name='mPago' onChange={ () => setMetodoPago("Efectivo")}/>
                <label htmlFor='pago2' >Credito</label>
                <input type="radio" id='pago2' name='mPago'  onChange={ () => setMetodoPago("Credito")}/>
                <label htmlFor='pago3' >Debito</label>
                <input type="radio" id='pago3' name='mPago' onChange={ () => setMetodoPago("Debito")}/>
              </div>
              <input type="submit"  onClick={ enviarCompra }/>
            </form>

        }
    </div>
  )
}

export default Pago