import React from 'react'
import { Link } from 'react-router-dom'
import './NavList.css'


const NavList = () => {

  const irAProductos = () =>{

    window.scrollTo(0,620)
  }
  
  return (
    <div className='menuBar'>
      <Link to={'/CD'} className='navList'> <button onClick={ irAProductos }>CDs</button> </Link> 
      <Link to={'/Vinilo'} className='navList'> <button onClick={ irAProductos }>Vinilos</button> </Link> 
      <Link to={'/Merchandising'} className='navList'> <button onClick={ irAProductos }>Merchandising</button> </Link> 
  </div>
  )
}

export default NavList