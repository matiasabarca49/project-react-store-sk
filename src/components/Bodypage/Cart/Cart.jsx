import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContex'
import './Cart.css'


const Cart = () => {

  const { cart, total, eliminarDelCarrito } = useContext(CartContext)

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
        <div className='contProductosCarrito'>

            {cart.length
            
            ?  cart.map(producto => (
                <div className='productoCarrito'> 
                  <img src={producto.url} alt="" />
                  <div className='productoCarrito__contInfo'>
                    <h2>{producto.nombre}</h2>
                    <div className='productoCarrito__cantidades'>
                      <h3>Cantidad: {producto.cantidad}</h3>
                      <h2>${producto.precio * producto.cantidad}</h2>
                    </div>
                  </div>
                  <button onClick={ () => eliminarDelCarrito(producto.id)}> <img src="./img/delete.png" alt="" /></button>
                </div>
              
              )) 
            : <h2 style={{textAlign:"center"}}>Tu carrito está vacio</h2>

            }
        </div>
      </div>
      <div className='totalCompra'>
          <h1> Total de la compra</h1>
          <div style={{display:"flex", justifyContent: "space-between"}}>
            <h3> Subtotal: </h3>
            <h3>${total}</h3>
          </div>
          <div style={{display:"flex", justifyContent: "space-between"}}>
            <h3> Costo de envio: </h3>
            <h3> $1999</h3>
          </div>
          <Link to='/Pagar' className='btn' > Procesar Compra </Link>
      </div>
    </div>
  )
}

export default Cart