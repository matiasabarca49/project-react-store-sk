import React, { useContext, useEffect, useState } from 'react'
import './ContCarrito.css'
import { CartContext } from '../../Context/CartContex'
import ListCarrito from './ListCarrito'
import TotalCarrito from './TotalCarrito'



const ContCarrito = ( {clase} ) => {

  const { cart } = useContext(CartContext)

  const [esVacio, setEsVacio] = useState(true)

  useEffect(() => {

    cart.length > 0
      ? setEsVacio(false)
      : setEsVacio(true)

  },[cart.length])
  

  return (
    <div className={clase} >
      <div className='contProductoCarrito'>
        {esVacio
          ?<h3 className='carritoVacio'>Carrito Vacio</h3>
          :<ListCarrito />  
        }
      </div>
      {!esVacio &&
        <TotalCarrito />
      }
    </div>
  )
}

export default ContCarrito