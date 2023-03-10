import './ItemListContainer.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"



const ItemListContainer = ( ) => {

  const [productosFetch, setProductosFetch] = useState([])
  const [cargaProductos, setCargaProductos] = useState(false)

  const { categoria } = useParams()

  useEffect(() => {

      const db = getFirestore()

      const q = query(
        collection(db, "items"),
        categoria && where("categoria", "==", categoria )
      )

      getDocs(q).then(snapshot => {
        setProductosFetch(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        setCargaProductos(true)
      })

    }, [categoria])
    
   
  return (

      <div className='contProducts'>
          <h2>Productos</h2>
          { cargaProductos
              ? <ItemList productos={ productosFetch }/>
              : <h3> Cargando... </h3>
          } 
      </div>
  

  )
}

export default ItemListContainer