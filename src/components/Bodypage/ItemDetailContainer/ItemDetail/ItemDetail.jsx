import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ( props ) => {
 

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
          <ItemCount producto={props.producto} />
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