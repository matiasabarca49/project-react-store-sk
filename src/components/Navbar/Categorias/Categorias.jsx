import React from 'react'
import './Categorias.css'
import { NavLink } from 'react-router-dom'

const Categorias = () => {
  return (
    <div className='productsBotonesCategoria'>

        <NavLink to='/' className='btn btnPrimario' activeclassname='active'> Todos</NavLink>
        <NavLink to='/CD' className='btn btnPrimario' activeclassname='active'> CDs</NavLink>
        <NavLink to='/Vinilo' className='btn btnPrimario' activeclassname='active'> Vinilos</NavLink>
        <NavLink to='/Merchandising' className='btn btnPrimario' activeclassname='active'> Merchandising</NavLink>

    </div>
  )
}

export default Categorias