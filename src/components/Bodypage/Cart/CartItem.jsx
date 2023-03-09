import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'


const CartItem = () => {

    const { cart, eliminarDelCarrito } = useContext(CartContext)

  return (
    <div className='contProductosCarrito'>

            {cart.length
            
            ?  cart.map(producto => (
                <div className='productoCarrito'> 
                  <img src={producto.url} alt="" />
                  <div className='productoCarrito__contInfo'>
                    <h2>{producto.nombre}</h2>
                    <div className='productoCarrito__cantidades'>
                      <h3>Cantidad: {producto.cantidad}</h3>
                      <h3>${producto.precio * producto.cantidad}</h3>
                    </div>
                  </div>
                  <button onClick={ () => eliminarDelCarrito(producto.id)}> <img src="./img/delete.png" alt="" /></button>
                </div>
              
              )) 
            : <h2 style={{textAlign:"center", color:"#9eaaba"}}>Tu carrito está vacio</h2>

            }
        </div>
  )
}

export default CartItem