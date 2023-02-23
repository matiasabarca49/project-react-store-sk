import './ItemList.css'
import ItemCDs from './Items/ItemCDs'
import ItemMerchandising from './Items/ItemMerchandising'
import ItemVinilo from './Items/ItemVinilo'
import { Route, Routes, NavLink} from 'react-router-dom'



const ItemList = ( ) => {
   
  return (
   
        <div className='products' >  
          <div className='productsBotonesCategoria'>
            <NavLink to='/' className='btn btnPrimario' activeclassname='active'> CDs</NavLink>
            <NavLink to='/vinilos' className='btn btnPrimario' activeclassname='active'> Vinilos</NavLink>
            <NavLink to='/merchandising' className='btn btnPrimario' activeclassname='active'> Merchandising</NavLink>
          </div>
          <div className=' productsCategoria'>
            <Routes>
              <Route path='/' element={ <ItemCDs/> } />
              <Route path='/vinilos' element={ <ItemVinilo/> } />
              <Route path='/merchandising' element={ <ItemMerchandising/> } />
            </Routes>
          </div>
          
        </div>
  )
}

export default ItemList