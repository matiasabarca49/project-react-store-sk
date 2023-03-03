import MainTitle from './MainTitle/MainTitle'
import ItemListContainer from './ItemListContainer/ItemListContainer'
//import ContCarrito from './ContCarrito/ContCarrito.jsx'


const Bodypage = () => {

  return (
    <>  
      {/*   <ContCarrito />  */}
        <MainTitle />
        <ItemListContainer greeting ="Aquí irá el catalogo de productos" />

    </>
  )
}

export default Bodypage