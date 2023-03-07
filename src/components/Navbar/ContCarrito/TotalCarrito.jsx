import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContex'

const TotalCarrito = () => {

const { total, vaciarCarrito } = useContext(CartContext)

  return (

    <div className='contVaciarCarrito'>
        <h4>Total: ${ total } </h4>
        <button onClick={  vaciarCarrito }>Vaciar Carrito</button>
        <Link to='/pagar'>Ir a Pagar</Link>
    </div>  


  )
}

export default TotalCarrito