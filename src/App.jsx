
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'



function App() {


  return (
    <Routes>
      <Route element={<DefaultLayout />}>
      <Route path='/' element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}

export default App
