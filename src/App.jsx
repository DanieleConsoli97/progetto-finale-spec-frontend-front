import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import { GlobalProvider } from './context/GlobalProvider'
import ListaProdotti from './pages/ListaProdotti'
import ProductDetails from './pages/ProductDetails'

function App() {


  return (
    <GlobalProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ListaProdotti/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Route>
      </Routes>
    </GlobalProvider>
  )
}

export default App
