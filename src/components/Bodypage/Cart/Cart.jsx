import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContex'
import './Cart.css'
import CartItem from './CartItem'
import TotalCompra from './TotalCompra'


const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div className='contenedorPrincipalCarrito'>
      
      <div className='totalProductos'>
        <div className=' totalProductos__contEncabezado'>
          <div className='totalProductos__encabezado'>
            <h2>Tu pedido:</h2>
            <div>
              <h5>Te estas llevando</h5>
              <h2>{cart.length} {cart.length <= 1?" Producto": "Productos" }</h2>
            </div>
          </div>
          <Link to='/' >Seguir Comprando</Link>
        </div>
        <CartItem />
      </div>
      <TotalCompra />
    </div>
  )
}

export default Cart