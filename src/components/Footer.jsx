import { Dumbbell, Heart, House } from "lucide-react"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="py-3 mt-5">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <NavLink to={"/"} className="nav-link px-2 text-body-secondary"><House  className='me-1'/>Home</NavLink>
                </li> 
                <li className="nav-item">
                    <NavLink  className="nav-link px-2 text-body-secondary"><Dumbbell className='me-1'/>Prodotti</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink href="#" className="nav-link px-2 text-body-secondary"><Heart className='me-1'/>Lista preferiti</NavLink>
                </li> 
            </ul>
            <p className="text-center text-body-secondary">© 2025 Hero Sport Shop</p> </footer>
    )
}

export default Footer