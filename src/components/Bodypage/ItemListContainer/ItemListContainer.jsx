import './ItemListContainer.css'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loader from '../../globals/Loader/Loader'



const ItemListContainer = ( ) => {

  //Estado que guarda los productos a renderizar
  const [productosFetch, setProductosFetch] = useState([])
  //Estado que evita la carga de productos hasta que los datos lleguen del servidor
  const [cargaProductos, setCargaProductos] = useState(false)

  //Obtenemos la categoria a traves de la url con el hook de react-router
  const { categoria } = useParams()

  useEffect(() => {

      const db = getFirestore()

      //Consultamos la coleccion con filtros, para obtener solamentes los productos de una unica categoria
      const q = query(
        //Indicamos a que coleccion queremos acceder
        collection(db, "items"), 
        //En caso de que la categoria no esté definica en la url, si no enviamos el filtro de categoria, obtenemos todos los productos
        categoria && where("categoria", "==", categoria )
      )
      
      //Obtenemos los documentos( productos) con los filtros creados anteriormente
      getDocs(q).then(snapshot => {
        //Se guardan los productos en un estado
        setProductosFetch(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        // Habilitamos la renderizacion de los mismos en el DOM
        setCargaProductos(true)
      })

    }, [categoria])
    
   
  return (

      <div className='contProducts'>
          <h2>Productos</h2>
          { cargaProductos
              ? <ItemList productos={ productosFetch }/>
              : <Loader />
          } 
      </div>
  

  )
}

export default ItemListContainer