import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = (props) => {
  return (
    <div className='contProducts'>
        <h2>Productos</h2>
        <p>{props.greeting}</p>
    </div>
  )
}

export default ItemListContainer