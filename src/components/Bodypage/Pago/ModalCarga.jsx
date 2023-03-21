import React from 'react'
import Loader from '../../globals/Loader/Loader'

const ModalCarga = () => {
  return (
    <div className='modalCargando'>
      <div className='contModal'>
        <Loader texto='Procesando Pago'/>
      </div> 
        
    </div>
  )
}

export default ModalCarga