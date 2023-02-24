import React, { useContext } from 'react'
import { usarProductos } from '../../ItemListContainer';
import './Items.css'
import { Link } from 'react-router-dom';

const ItemVinilo = () => {

  const productos = useContext(usarProductos)
  const productosVinilos = productos.filter(producto => producto.categoria === "Vinilo")
  
  return (
   <>
    <>
            {productosVinilos.map(producto =>
                <div key={ producto.id } className="producto">
                    <div className='productoImg'>
                      <h4>{producto.categoria}</h4>
                      <img src={producto.url} alt={producto.nombre} />
                    </div>
                    <div className='productoInfo'>
                        <h3>{producto.nombre}</h3>
                        <h4>Precio: ${producto.precio}</h4>
                        <h5> Disponibles: {producto.stock}</h5>
                        <Link to={ `/${producto.categoria}/${producto.id}`} className='btn btn--agregarAlCarrito'> Ver Producto </Link>
                    </div>
                </div>
            )}
        </>
   </>
  )
}

export default ItemVinilo