import React from 'react'
import './CarWidget.css'
import carrito from './compra.png'

const CarWidget = () => {
  return (
    <div className='botonCarrito'>
            <img src={carrito} alt="Carrito" />
            <p>4</p>
    </div>
  )
}

export default CarWidget