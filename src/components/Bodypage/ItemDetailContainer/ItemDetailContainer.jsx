import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { getItem } from '../../../data/baseDeDatos'


const ItemDetailContainer = (props) => {

    const { id } = useParams()

    const [producto, setProducto] = useState({})
    const [carga, setCarga] = useState(false)

    useEffect(() => {
      getItem(id) // Cambiar por props.id
        .then(producto => {
          console.log(id)
          console.log(producto)
          setProducto(producto)
          setCarga(true)
        })
        .catch(error => console.log(error))
    
    }, [id])
    

  return (
    <>
      
      {carga? <ItemDetail producto = { producto }/> : <h1>Cargando...</h1>}
    
    </>

  
  )
}

export default ItemDetailContainer