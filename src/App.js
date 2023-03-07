import Navbar from './components/Navbar/Navbar';
import Bodypage from './components/Bodypage/Bodypage';
import CartProvider from './components/Context/CartContex';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagar from './components/Navbar/ContCarrito/Pagar';
import ItemDetailContainer from './components/Bodypage/ItemDetailContainer/ItemDetailContainer';




function App() {
  return <>
  
    <CartProvider>

      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Bodypage />} />
            <Route exact path='/:categoria' element={<Bodypage />} />
            <Route exact path='/:categoria/:id' element={<ItemDetailContainer />} />
            <Route exact path='/pagar' element={<Pagar />} />
          </Routes>
      </BrowserRouter>

    </CartProvider>
  
  </>
}

export default App;
