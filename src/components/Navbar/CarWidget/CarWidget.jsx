import './CarWidget.css'
import carritoIMG from './compra.png'
import { CartContext } from '../../Context/CartContex'
import { useContext, useEffect, useState} from 'react'
import ContCarrito from '../ContCarritoNav/ContCarrito'
import { useLocation } from 'react-router-dom'


const CarWidget = () => {

  const [activarCarrito, setActivarCarrito] = useState(false)
 
  const { cantidadDeProductos } = useContext(CartContext)

  const urlActual = useLocation()

  useEffect(() => {
    
    urlActual.pathname === "/Cart" && setActivarCarrito(false)
    
  }, [urlActual])
  

  return (
    <>
    
      <div className='botonCarrito' onClick={ () => setActivarCarrito(!activarCarrito) }>
              <img src={carritoIMG} alt="Carrito" />
              {
                  cantidadDeProductos()
                    ? <p>{cantidadDeProductos()}</p>
                    : null 
              }
      </div>
      
      <ContCarrito 
      clase={ activarCarrito? "contCarrito--activated" : 'contCarrito--activated contCarrito--desactivated' }/>
      
    </>
  )
}

export default CarWidget