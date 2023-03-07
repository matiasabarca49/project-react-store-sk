import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { getItem } from '../../../data/baseDeDatos'


const ItemDetailContainer = (props) => {

    const { id } = useParams()

    const [producto, setProducto] = useState({})
    const [carga, setCarga] = useState(false)

    useEffect(() => {
      getItem(id) 
        .then(producto => {
          setProducto(producto)
          setCarga(true)
        })
        .catch(error => console.log(error))
    
    }, [id])
    

  return (
    <>
      
      {carga? <ItemDetail producto = { producto }/> : <h1 style={{textAlign:'center', height:'calc(100vh - 70px)'}}>Cargando...</h1>}
    
    </>

  
  )
}

export default ItemDetailContainer