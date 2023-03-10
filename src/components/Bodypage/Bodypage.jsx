import MainTitle from './MainTitle/MainTitle'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'



const Bodypage = () => {

  return (
    <>  
        <MainTitle />
        <Routes>
            <Route exact path='/' element = { <ItemListContainer /> } />
            <Route exact path='/:categoria' element = { <ItemListContainer /> } />
        </Routes>
    </>
  )
}

export default Bodypage