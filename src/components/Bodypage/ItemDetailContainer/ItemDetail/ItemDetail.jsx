import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContex'
import './ItemDetail.css'

const ItemDetail = ( props ) => {
 
  const { agregarAlCarrito } = useContext(CartContext)

  let categoria
  props.producto.categoria === "CD" 
    ? categoria = "/"
    : categoria = "/" + props.producto.categoria

  return (
    <div className='vistaProducto'>
      <Link to = { `${categoria}` } className =' regresar '> <img src="../img/flecha-izquierda.png" alt=""/> </Link>
      <div className='vistaProductoContInfo'>
        <h2>{props.producto.nombre}</h2>
        <div className='vistaProductoInfo'>
          <img src={`.${props.producto.url}`} alt={props.producto.nombre} />        
          <div className='vistaProductoInfoPrecio'>
            <h4>${props.producto.precio}</h4>
            <h5>Disponibles: {props.producto.stock}</h5>
            <button className='btn btn--agregarAlCarrito' onClick={()=> agregarAlCarrito(props.producto)}> Agregar al carrito</button>
          </div>
        </div>
        <div className='separator'></div>
        <div className='vistaProductoDescripcion'>
          <h3>Descripcion del producto:</h3>
          <p>{props.producto.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail