import Navbar from './components/Navbar/Navbar';
import Bodypage from './components/Bodypage/Bodypage';
import CartProvider from './components/Context/CartContex';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Bodypage/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Bodypage/Cart/Cart';
import Pago from './components/Bodypage/Pago/Pago';


function App() {

  return <>
  
    <CartProvider>

      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Bodypage />} />
            <Route exact path='/:categoria' element={<Bodypage />} />
            <Route exact path='/:categoria/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route exact path='/Pagar' element={< Pago />} />
          </Routes>
      </BrowserRouter>

    </CartProvider>
  
  </>
}

export default App;
