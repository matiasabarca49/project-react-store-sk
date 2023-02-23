import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'
import { createContext } from 'react'


export const usarProductos = createContext(null)


const ItemListContainer = (props) => {

  const [productosFetch, setProductosFetch] = useState([])
  const [cargaProductos, setCargaProductos] = useState(false)


  useEffect(() => {
   
      setTimeout( () => {
        fetch('./json/baseDeDatos.json')
          .then(response => response.json())
          .then(res => setProductosFetch(res))
          .finally(setCargaProductos(true))
      },2000)

  }, [])

  return (

    <usarProductos.Provider value={productosFetch}>

      <div className='contProducts'>
          <h2>Productos</h2>
          { cargaProductos
              ? <ItemList productos= { productosFetch } />
              : <h3> Cargando... </h3>
          }
      </div>

    </usarProductos.Provider>
        

  )
}

export default ItemListContainer