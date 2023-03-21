import Navbar from './components/Navbar/Navbar';
import Bodypage from './components/Bodypage/Bodypage';
import CartProvider from './components/Context/CartContex';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/Bodypage/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Bodypage/Cart/Cart';
import Pago from './components/Bodypage/Pago/Pago';
import Footer from './components/Footer/Footer';


function App() {

  return <>
  
    {/* El componente CartProvider contiene todo el contexto de la app,
    permite que los componentes hijos accedan a sus funciones y estados. 
    Es el componente más importante para el funcionamiento del carrito*/}
    <CartProvider>

      <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Al colocar el mismo elemento <Bodypage/> con la ruta "/" y "/:categoria" 
            renderizamos siempre el titulo principal en la vista de productos. En otras palabras
            bodypage renderiza la home completa. */}
            <Route exact path='/' element={<Bodypage />} />
            <Route exact path='/:categoria' element={<Bodypage />} />

            {/* De esta forma evitamos renderizar el MainTittle en la vista de productos o en la vista
            del carrito */}
            <Route exact path='/:categoria/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route exact path='/Pagar' element={< Pago />} />
          </Routes>
          <Footer />
      </BrowserRouter>

    </CartProvider>
  
  </>
}

export default App;
