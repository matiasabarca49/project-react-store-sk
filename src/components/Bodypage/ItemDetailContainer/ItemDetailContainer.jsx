import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loader from '../../globals/Loader/Loader'



const ItemDetailContainer = () => {

    //Obtenemos el id del producto mediante la url y el hook useParams()
    const { id } = useParams()

    const [producto, setProducto] = useState({})
    const [carga, setCarga] = useState(false)

    useEffect(() => {

      const db = getFirestore()

      // Seteamos la coleccion y el id del producto por el cual se consultará
      const productoRef = doc(db, "items", id )
      getDoc(productoRef).then(snapshot => {
        if (snapshot.exists()){
          setProducto({id: snapshot.id, ...snapshot.data()})
          //Se carga el componente <Loader> hasta que se recibe la respuesta del servidor
          setCarga(true)
        }
      })

    }, [id])
    

  return (
    <>
      
      {carga? <ItemDetail producto = { producto }/> : <Loader />}
    
    </>

  
  )
}

export default ItemDetailContainer