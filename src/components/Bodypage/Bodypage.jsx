import MainTitle from './MainTitle/MainTitle'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'



const Bodypage = () => {

  return (
    <>  
        {/* El eslogan o titulo principal se renderiza simepre sin importar la categoria */}
        <MainTitle />
        {/*  utilizamos el hook useParams para renderizar las distintas categorias o todas  */}
        <Routes>
            {/* La ruta raiz  "/" con el componente <ItemListContainer> nos permite renderizar
            todos los productos  */}
            <Route exact path='/' element = { <ItemListContainer /> } />
            {/* De esta otro forma renderizamos segun la categoria  siempre manteniendo el <MainTittle>*/}
            <Route exact path='/:categoria' element = { <ItemListContainer /> } />
        </Routes>
    </>
  )
}

export default Bodypage