import React from 'react'
import CarWidget from './CarWidget/CarWidget'
import ItemList from './ItemList/ItemList'
import './Navbar.css'
import logo from './tocar.png'

const Navbar = () => {
  return (
    <header>
      <nav>
          <div className='logo'>
            <a href="../../public/index.html">
              <img src={logo} alt="Logo" /> | <span>SOUNDKING</span>
            </a>
          </div>
          <ItemList />
          <CarWidget />
      </nav>

    </header>

  )
}

export default Navbar