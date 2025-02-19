import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    <div className='navbar'>
        <Link className='navLinkStyle' to="/">Main page</Link>
        <Link className='navLinkStyle' to="/register">Register</Link>
        <Link className='navLinkStyle' to="/login">Login</Link>
    </div>
}

export default Navbar