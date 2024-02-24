import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <div className="menu-icons">
            <ul className="nav-list-items">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contat</NavLink>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
