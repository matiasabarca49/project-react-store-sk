import React, { useContext, useEffect, useState } from 'react'
import './ContCarrito.css'
import { CartContext } from '../../Context/CartContex'



const ContCarrito = ( {clase} ) => {

  const { cart, total, eliminarDelCarrito, aumentarCantidadDeProducto,disminuirCantidadDeProducto, vaciarCarrito } = useContext(CartContext)

  const [esVacio, setEsVacio] = useState(true)

  useEffect(() => {

    cart.length > 0
      ? setEsVacio(false)
      : setEsVacio(true)

  },[cart.length])
  
  console.log(total)

  return (
    <div className={clase} >
      <div className='contProductoCarrito'>
        {esVacio
          ?<h3 className='carritoVacio'>Carrito Vacio</h3>
          :cart.map(  producto =>(
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
      </div>
      {!esVacio &&
        <div className='contVaciarCarrito'>
          <h4>Total: ${ total } </h4>
          <button onClick={  vaciarCarrito }>Vaciar Carrito</button>
        </div> 
      }
    </div>
  )
}

export default ContCarrito