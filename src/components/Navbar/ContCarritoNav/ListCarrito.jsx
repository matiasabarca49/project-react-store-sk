import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'

const ListCarrito = () => {

  const { cart, eliminarDelCarrito, aumentarCantidadDeProducto,disminuirCantidadDeProducto } = useContext(CartContext)

  return (
    <>
      {cart.map(  producto =>(
            <div key={producto.id} className='productoCarrito'>
                <h5>{producto.nombre}</h5>
                <h5>{producto.cantidad} x ${producto.precio}</h5>
                <h5>${producto.precio * producto.cantidad} </h5>
                <div className='botonesCarrito'>
                  <button className='btn btn--agregarAlCarrito' onClick={() => aumentarCantidadDeProducto(producto.id) }>+</button>
                  <button className='btn btn--agregarAlCarrito'onClick={() => disminuirCantidadDeProducto(producto.id) }>-</button>
                  <button className='btn btn--agregarAlCarrito' onClick={()=> eliminarDelCarrito(producto.id)}>X</button>
                </div>
            </div>
        ) )}
    </>
  )
}

export default ListCarrito