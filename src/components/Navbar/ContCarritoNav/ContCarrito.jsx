import React, { useContext, useEffect, useState } from 'react'
import './ContCarrito.css'
import { CartContext } from '../../Context/CartContex'
import ListCarrito from './ListCarrito'
import TotalCarrito from './TotalCarrito'

//Por props se envia la clase que oculta o permite mostrar el carrito preview
const ContCarrito = ( {clase} ) => {


  // Obtenemos el carrito mediante Context para renderizarlo en la preview del carrito
  const { cart } = useContext(CartContext)

  // Estado que nos permite indica si el carrito está vacio o no
  const [esVacio, setEsVacio] = useState(true)


  //Constantemente se sigue la longitud del array carrito, si se encuentra vacio, se renderiza la frase "carrito Vacio" o el componente que renderiza todos los productos
  useEffect(() => {
    
    cart.length > 0
      ? setEsVacio(false)
      : setEsVacio(true)

  },[cart.length])
  

  return (
    <div className={clase} >
      <div className='contProductoCarrito'>
        {esVacio
          ?<h3 className='carritoVacio'>Carrito Vacio</h3>
          :<ListCarrito />  
        }
      </div>
      {/* Si el carrito está vacio, no se muesta los botones "  vaciar Carrito  o " ir a pagar " */}
      {!esVacio &&
        <TotalCarrito />
      }
    </div>
  )
}

export default ContCarrito