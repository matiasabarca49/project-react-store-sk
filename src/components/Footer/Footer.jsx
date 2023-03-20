import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const redes = [
  {icono:'../img/instagram.png', url: "https://www.instagram.com/"},
  {icono:'../img/gorjeo.png', url: "https://www.facebook.com/"},
  {icono:'../img/facebook.png', url:"https://twitter.com/"}
]
 


const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='logo'>
            <Link to='/'>
              <img src='../img/viniloFooter2.png' alt="Logo" /> 
            </Link>
      </div>
      <div className='contRedes'>
        <h2 style={{fontSize: "2rem"}}> Contactanos: </h2>
        <ul className='redes'>

          {
            redes.map((redSocial, index) => (
              <li key={index}>
                <a className='btn' href={redSocial.url}>
                  <img src={redSocial.icono} alt="" />
                </a>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default Footer