import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {

    const { id } = useParams()

    const [producto, setProducto] = useState({})
    const [carga, setCarga] = useState(false)

    useEffect(() => {

      const db = getFirestore()

      const productoRef = doc(db, "items", id )
      getDoc(productoRef).then(snapshot => {
        if (snapshot.exists()){
          setProducto({id: snapshot.id, ...snapshot.data()})
          setCarga(true)
        }
      })

    }, [id])
    

  return (
    <>
      
      {carga? <ItemDetail producto = { producto }/> : <h1 style={{textAlign:'center', height:'calc(100vh - 70px)'}}>Cargando...</h1>}
    
    </>

  
  )
}

export default ItemDetailContainer