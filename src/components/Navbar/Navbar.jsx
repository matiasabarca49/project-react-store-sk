import React  from 'react'
import CarWidget from './CarWidget/CarWidget'
import NavList from './NavList/NavList.jsx'
import './Navbar.css'
import logo from './tocar.png'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <header>
      <nav>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt="Logo" /> | <span>SOUNDKING</span>
            </Link>
          </div>
          <NavList />
          <CarWidget />
      </nav>

    </header>

  )
}

export default Navbar