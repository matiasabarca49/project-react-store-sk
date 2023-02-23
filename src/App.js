import Navbar from './components/Navbar/Navbar';
import Bodypage from './components/Bodypage/Bodypage';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return <>

    <BrowserRouter>
        <Navbar />
        <Bodypage />
    </BrowserRouter>
  
  </>
}

export default App;
