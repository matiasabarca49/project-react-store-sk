import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import { Link } from 'react-router-dom'

const TotalCompra = () => {

    const {cart, total} = useContext(CartContext)

  return (
    <div className='totalCompra'>
          <h1> Total de la compra</h1>
          <div style={{display:"flex", justifyContent: "space-between", marginTop:"1rem", color:"#9eaaba"}}>
            <h4 style={{ fontWeight:"400"}}> Subtotal: </h4>
            <h4 style={{ fontWeight:"400"}}>${total}</h4>
          </div>
          <div style={{display:"flex", justifyContent: "space-between",  color:"#9eaaba", fontWeight:"300" }}>
            <h4 style={{ fontWeight:"300"}}> Costo de envio: </h4>
            <h4 style={{ fontWeight:"300"}}> ${cart.length? 1999 : 0}</h4>
          </div>
          <h2 style={{ marginTop: "1rem", fontSize: "2rem"  }}>${cart.length?total + 1999 : 0}</h2>
          <Link to='/Pagar' className='btn btnProcesarCompra' > PROCESAR COMPRA </Link>
          <div className='disclaimer'>
            <h4>Reserva de productos</h4>
            <p>Los productos son reservados una vez realizado el pago y el mismo se encuentre aprobado.</p>
          </div>
      </div>
  )
}

export default TotalCompra