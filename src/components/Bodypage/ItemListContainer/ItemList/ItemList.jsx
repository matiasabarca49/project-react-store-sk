import './ItemList.css'
import '../../../globals/Button/Button.css'
import ItemCDs from './Items/ItemCDs'
import ItemMerchandising from './Items/ItemMerchandising'
import ItemVinilo from './Items/ItemVinilo'
import { Route, Routes, NavLink} from 'react-router-dom'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'



const ItemList = ( ) => {
   
  return (
   
        <div className='products' >  
          <div className='productsBotonesCategoria'>
            <NavLink to='/' className='btn btnPrimario' activeclassname='active'> CDs</NavLink>
            <NavLink to='/Vinilo' className='btn btnPrimario' activeclassname='active'> Vinilos</NavLink>
            <NavLink to='/Merchandising' className='btn btnPrimario' activeclassname='active'> Merchandising</NavLink>
          </div>
          <div className=' productsCategoria'>
            <Routes>
              <Route exact path='/' element={ <ItemCDs/> } />
              <Route  exact path='/Vinilo' element={ <ItemVinilo/> } />
              <Route  exact path='/Merchandising' element={ <ItemMerchandising/> } />
            </Routes>
          </div>
          <Routes>
              <Route  path='/:categoria/:id' element= { <ItemDetailContainer /> } />
          </Routes>
          
        </div>
  )
}

export default ItemList