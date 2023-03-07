import './ItemList.css'
import '../../../globals/Button/Button.css'
import Items from './Items/Items'
import { Route, Routes} from 'react-router-dom'
import Categorias from '../../../Navbar/Categorias/Categorias'


const ItemList = () => {

   
  return (
    
        <div className='products'>  
          
          <Categorias />
          <Routes>
            <Route exact path='/' element = { <Items /> } />
            <Route exact path='/:categoria' element = { <Items /> } />
          </Routes>

        </div>
  )
}

export default ItemList