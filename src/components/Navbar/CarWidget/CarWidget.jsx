import './CarWidget.css'
import carritoIMG from './compra.png'
import { CartContext } from '../../Context/CartContex'
import { useContext, useEffect, useState} from 'react'
import ContCarrito from '../ContCarritoNav/ContCarrito'
import { useLocation } from 'react-router-dom'


const CarWidget = () => {


  /*  Estado que permite mostrar o ocultar el carrito en el dom */
  const [activarCarrito, setActivarCarrito] = useState(false)
 
  /* Usamos Context para utilizar la funcion que nos dice la cantidad de productos en el carrito.*/
  const { cantidadDeProductos } = useContext(CartContext)

  // El hooks de react router permite obtener la url actual
  //Este hooks nos permite deactivar componentes o clases de acuerdo a la url actual
  const urlActual = useLocation()

  useEffect(() => {
    // Al acceder al carrito completo, se oculta el preview del carrito ubicado en el Nav.
    //Esto se hace colocando una clase que lo oculta "contCarrito--desactivated". El estado al ser falso, envia la clase que lo oculta
    urlActual.pathname === "/Cart" && setActivarCarrito(false)
    
    // Constantemente se sigue la url actual con useEffect 
  }, [urlActual])
  

  return (
    <>
      {/*  El evento nos permite mediante un estado activar o desactivar la clase que muestra el carrito */}
      <div className='botonCarrito' onClick={ () => setActivarCarrito(!activarCarrito) }>
              <img src={carritoIMG} alt="Carrito" />
              {/* Si la cantidad de productos es 0, no se muestra en el DOM */}
              {
                  cantidadDeProductos()
                    ? <p>{cantidadDeProductos()}</p>
                    : null 
              }
      </div>
      
      {/* El componente carrito se renderiza siempre, pero segun la clase se muestra o no. Esta clase se envia mediante props,
       segun el estado "activarCarrito"*/}
      <ContCarrito 
      clase={ activarCarrito? "contCarrito--activated" : 'contCarrito--activated contCarrito--desactivated' }/>
      
    </>
  )
}

export default CarWidget