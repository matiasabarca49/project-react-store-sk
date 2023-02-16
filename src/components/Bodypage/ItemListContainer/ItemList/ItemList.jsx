import { useState } from 'react'
import Item from './Item/Item'
import './ItemList.css'


const ItemList = (props) => {
  

  const [carrito, setCarrito] = useState([])

  
  
  
  const agregarAlcarrito = (productoID) => {
    const productoEncontradoEnCarrito = carrito.find(producto => producto.id ===  productoID);
    if (productoEncontradoEnCarrito){
      productoEncontradoEnCarrito.cantidad++
      setCarrito([
        ...carrito
      ])
    }
    else{
      const productoEncontradoEnBaseDeDatos = props.productos.find(producto => producto.id === productoID)
      setCarrito([
        ...carrito,
        productoEncontradoEnBaseDeDatos
      ])
    }
}


  return (
   
        <div className='products'>  
          
          {props.productos.map(producto => 
              <Item 
                key={ producto.id } 
                datos = { producto } 
                eventoAgregarAlCarrito = { () => agregarAlcarrito(producto.id) } 

              />)
          }
        </div>
  )
}

export default ItemList