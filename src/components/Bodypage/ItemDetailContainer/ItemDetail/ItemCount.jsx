import React, { useContext, useState } from 'react'
import { CartContext } from '../../../Context/CartContex'

const ItemCount = ( props ) => {

    const { agregarAlCarrito }=useContext( CartContext )
    const [cantidad, setCantidad] = useState(1)

    const aumentarCantidad = () =>{
        cantidad < props.producto.stock && setCantidad( cantidad + 1)
    }

    const disminuirCantidad = () =>{
        cantidad > 1 && setCantidad( cantidad - 1)
    }

  return (

    <div className='vistaProductoInfoPrecio'>
            <h4>${props.producto.precio}</h4>
            <h5>Disponibles: {props.producto.stock}</h5>
            <div className='itemCount'>
                <button className='btn' onClick={ aumentarCantidad }>+</button>
                <h5>{cantidad}</h5>
                <button className='btn' onClick={ disminuirCantidad }>-</button>
            </div>
            <button className='btn btn--agregarAlCarrito' onClick={()=> agregarAlCarrito(props.producto, cantidad)}> Agregar al carrito</button>
    </div>
  )
}

export default ItemCount