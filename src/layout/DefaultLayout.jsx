
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const DefaultLayout = () => {
  return (
    <main >
      <NavBar />
      <div className='container-xxl'>
        <Outlet></Outlet>
      </div>
      
        <Footer />
    </main>
  )
}

export default DefaultLayout