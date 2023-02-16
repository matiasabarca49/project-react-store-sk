import './CarWidget.css'
import carritoIMG from './compra.png'


const CarWidget = () => {

  
  return (
    <div className='botonCarrito'>
            <img src={carritoIMG} alt="Carrito" />
            <p>{1}</p>
    </div>
  )
}

export default CarWidget