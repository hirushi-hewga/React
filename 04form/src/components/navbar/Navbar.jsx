import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">Main page</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar