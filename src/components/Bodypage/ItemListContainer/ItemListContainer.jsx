import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'
import { getProducs } from '../../../data/baseDeDatos'


const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([])
  const [cargaProductos, setCargaProductos] = useState(false)

  useEffect(() => {
    getProducs
      .then((res) => setProductos(res))
      .catch((error) => console.log(error))
      .finally(()=> {
        console.log("Productos Cargados")
        setCargaProductos(true)
      })
  }, [])

  return (
    <div className='contProducts'>
        <h2>Productos</h2>
        <p>{props.greeting}</p>
        { cargaProductos
            ? <ItemList productos = { productos } />
            : <h3> Cargando... </h3>
        }

    </div>
        

  )
}

export default ItemListContainer