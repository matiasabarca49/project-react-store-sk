import Navbar from './components/Navbar/Navbar';
import Bodypage from './components/Bodypage/Bodypage';
import CartProvider from './components/Context/CartContex';
import { BrowserRouter } from 'react-router-dom'




function App() {
  return <>
  
    <CartProvider>

      <BrowserRouter>
          <Navbar />
          <Bodypage />
      </BrowserRouter>

    </CartProvider>
  
  </>
}

export default App;
