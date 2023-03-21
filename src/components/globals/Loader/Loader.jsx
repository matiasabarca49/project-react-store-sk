import React from 'react'
import './Loader.css'


const Loader = ({texto}) => {
  return (
    <div className='contLoader'>


      <section className="loader"  >

          <div className="slider slider1"  >
          </div>
          <div className="slider slider2" >
          </div>
          <div className="slider slider3" >
          </div>
          <div className="slider slider4" >
          </div>
          <div className="slider slider5" >
          </div>

      </section>

      <div className='loaderTexto'>{texto}</div>

    </div>

  )
}

export default Loader