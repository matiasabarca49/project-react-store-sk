import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Bodypage/ItemListContainer/ItemListContainer';
import Eslogan from './components/Bodypage/Eslogan';

function App() {
  return <>

      <Navbar />
      <Eslogan />
      <ItemListContainer greeting ="Aquí irá el catalogo de productos" />
  
  </>
}

export default App;
