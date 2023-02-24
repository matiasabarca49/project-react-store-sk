import React from 'react'
import { Link } from 'react-router-dom'
import './NavList.css'


const NavList = () => {
  return (
    <div className='menuBar'>
      <Link to='/' className='navList'> CDs </Link>
      <Link to='/Vinilo' className='navList'> Vinilos</Link>
      <Link to='Merchandising' className='navList'> Merchandising </Link>
  </div>
  )
}

export default NavList