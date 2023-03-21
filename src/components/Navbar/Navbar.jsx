import React  from 'react'
import CarWidget from './CarWidget/CarWidget'
import NavList from './NavList/NavList.jsx'
import './Navbar.css'
import logo from './tocar.png'
import { Link } from 'react-router-dom'
import Modo from './Modo/Modo'

const Navbar = () => {


  return (
    <header>
      <nav>
          <div className='logo'>
            {/* se utiliza el componenete "LINK" de react router para redirgir a la url raiz  */}
            <Link to='/'>
              <img src={logo} alt="Logo" /> | <span>SOUNDKING</span>
            </Link>
          </div>
          {/* Llamamos a los demás componentes que componen el NavBar */}
          <NavList />
          <CarWidget />
          <Modo />
      </nav>

    </header>

  )
}

export default Navbar