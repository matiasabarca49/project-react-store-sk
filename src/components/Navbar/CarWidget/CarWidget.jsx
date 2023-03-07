import './CarWidget.css'
import carritoIMG from './compra.png'
import { CartContext } from '../../Context/CartContex'
import { useContext, useState} from 'react'
import ContCarrito from '../ContCarrito/ContCarrito'

const CarWidget = () => {

  const [activarCarrito, setActivarCarrito] = useState(false)

  const { cantidadDeProductos } = useContext(CartContext)

  return (
    <>
    
      <div className='botonCarrito' onClick={ () => setActivarCarrito(!activarCarrito) }>
              <img src={carritoIMG} alt="Carrito" />
              <p>{
                  cantidadDeProductos()
              }</p>
      </div>
      <ContCarrito 
      clase={ activarCarrito? "contCarrito--activated" : 'contCarrito--activated contCarrito--desactivated' }/>
    
    </>
  )
}

export default CarWidget