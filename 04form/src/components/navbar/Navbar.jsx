import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';
import './Navbar.css'

const Navbar = ({ isLoggedIn = false, userId = null, onLogout }) => {
    const json = localStorage.getItem("users")
    const userImage = () => {
        if (isLoggedIn) {
            const array = JSON.parse(json)
            return array.find(u => u.id == userId).image
        }
    }

    function isValidUrl(url) {
        try {
            new URL(url)
            return true
        } catch (error) {
            return false
        }
    }
    
    return (
        <div className='navbar'>
            <div className='navlinks'>
                <Link to="/">MainPage</Link>
                <Link to="/users">Users</Link>
            </div>
                { !isLoggedIn ? <div className='navauth'> <Link to="/register">
                    <Button style={{margin: "0 15px 0 0"}} variant='contained'>Register</Button>
                </Link>
                <Link to="/login">
                    <Button variant='contained'>Login</Button>
                </Link> </div> : <div className='navauth'>
                    <Button onClick={onLogout} style={{margin: "0 15px 0 0"}} variant='contained'>Logout</Button>
                    { isValidUrl(userImage()) ? <img style={{borderRadius: "50%", width: "40px", height: "40px"}} src={userImage()} /> :
                    <AccountCircleIcon style={{borderRadius: "50%", width: "40px", height: "40px"}} />}
                </div>}
            
            
        </div>
    )
}

export default Navbar