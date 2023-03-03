import './ItemList.css'
import '../../../globals/Button/Button.css'
import Items from './Items/Items'
import { Route, Routes} from 'react-router-dom'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'
import Categorias from '../../../Navbar/Categorias/Categorias'


const ItemList = () => {

   
  return (
    
        <div className='products'>  
          
          <Categorias />
          <Routes>
            <Route path='/' element = { <Items /> } />
            <Route path='/:categoria' element = { <Items /> } />
            <Route  path='/:categoria/:id' element= { <ItemDetailContainer /> } />
          </Routes>

        </div>
  )
}

export default ItemList