
import { Dumbbell, Heart, House, Shirt } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { NavLink } from 'react-router-dom'
import JumboTron from './JumboTron';
import { useLocation } from 'react-router-dom';
import WishList from './WishList';
const NavBar = () => {
  const path = useLocation()
  return (
    <>
      <nav className='navbar navbar-expand-lg border-bottom border-body'>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={'/'}><House className='me-1' />Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={'/products'}><Dumbbell className='me-1' />Prodotti</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to={'/productcompare'}><Heart className='me-1' />Comparatore prodotti</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <Heart className='me-1' />Lista preferiti
                </a>
                <ul className="dropdown-menu m-2  p-0 border-0 ">
                  <WishList />
                </ul>
              </li>
            </ul>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
      {path.pathname === "/" ? <JumboTron /> : ""}
    </>
  )
}

export default NavBar