import { Link } from 'react-router-dom';
import './Items.css'


const Items = ( { producto } ) => {

    
  return (

    <div className="producto">
        <div className='productoImg'>
            <h4>{producto.categoria}</h4>
            <img src={producto.url} alt={producto.nombre} />
        </div>
        <div className='productoInfo'>
            <h3>{producto.nombre}</h3>
            <h4>Precio: ${producto.precio}</h4>
            <h5> Disponibles: {producto.stock}</h5>
            {/* El enlace se crea mediante el id del producto + react router */}
            <Link to={ `/${producto.categoria}/${producto.id}`} className='btn btn--agregarAlCarrito'> Ver Producto </Link>
        </div>
    </div>
                 
    )
}

export default Items