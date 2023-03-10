import './ItemList.css'
import '../../../globals/Button/Button.css'
import Items from './Items/Items'
import Categorias from '../../../Navbar/Categorias/Categorias'


const ItemList = ({ productos }) => {

   
  return (
    
        <div className='products'>  
          
          <Categorias />
          <div className=' productsCategoria'>
            {productos.map( producto => (
              <Items key={ producto.id } producto={ producto } />
            ))}
          </div>

        </div>
  )
}

export default ItemList