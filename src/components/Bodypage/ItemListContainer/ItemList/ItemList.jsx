import './ItemList.css'
import '../../../globals/Button/Button.css'
import Items from './Items/Items'
import { Route, Routes, NavLink} from 'react-router-dom'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'


const ItemList = () => {

   
  return (
   
        <div className='products'>  
          <div className='productsBotonesCategoria'>
            <NavLink to='/' className='btn btnPrimario' activeclassname='active'> Todos</NavLink>
            <NavLink to='/CD' className='btn btnPrimario' activeclassname='active'> CDs</NavLink>
            <NavLink to='/Vinilo' className='btn btnPrimario' activeclassname='active'> Vinilos</NavLink>
            <NavLink to='/Merchandising' className='btn btnPrimario' activeclassname='active'> Merchandising</NavLink>
          </div>

          <div className=' productsCategoria'>
            
             <Routes>
                <Route path='/' element = { <Items /> } />
                <Route path='/:categoria' element = { <Items /> } />
              </Routes>

          </div>
          <Routes>
              <Route  path='/:categoria/:id' element= { <ItemDetailContainer /> } />
          </Routes>
          
        </div>
  )
}

export default ItemList