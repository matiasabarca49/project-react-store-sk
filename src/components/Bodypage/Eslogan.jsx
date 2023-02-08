import React from 'react'
import './Eslogan.css'
import imagenTitulo from './imagenTitulo.png'

const Eslogan = () => {
  return (
    <main className='contenedorPrincipal'>
      <div className='contTitulo'>
        <div className='contTitulo__frase'>
          <h1>Escuchá tu música como si estuvieras en el estudio de grabacion!</h1>
          <p>Pensada por audiófilos compartiendo la musica en la calidad que el artista quiere que escuches. Comprá Discos, Vinilos y Merchandising oficial en un solo lugar.</p>
        </div>
        <img src={imagenTitulo} alt="reproductor" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='onda'>
        <path fill="#ffffff" fill-opacity="1" d="M0,288L1440,128L1440,320L0,320Z" data-darkreader-inline-fill=""></path>
      </svg>
    </main>
  )
}

export default Eslogan