import { useContext, useEffect, useState } from 'react';
import { usarProductos } from '../../ItemListContainer';
import { Link, useParams } from 'react-router-dom';
import './Items.css'


const Items = (  ) => {

    const productos = useContext(usarProductos)

    const [productosDeCategoria, setproductosDeCategoria] = useState( [] )

    const { categoria } = useParams()

    useEffect(() => {
        
        categoria 
            ? setproductosDeCategoria(productos.filter(producto => producto.categoria === categoria))
            : setproductosDeCategoria(productos)

    }, [productos,categoria])
    
    
  return (

        <div className=' productsCategoria'>
            {productosDeCategoria.map(producto =>
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
        </div>
    )
}

export default Items