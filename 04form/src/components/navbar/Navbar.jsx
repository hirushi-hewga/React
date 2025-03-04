import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../provoders/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './Navbar.css'

const Navbar = () => {
    const { auth, logout } = useContext(AuthContext)
    
    const logoutHandler = () => {
        logout()
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
                { ( auth?.role === "admin" ) && (
                    <>
                        <Link to="/users">Users</Link>
                        <Link to="/roles">Roles</Link>
                    </>
                )}
            </div>
                { !auth ? <div className='navauth'> <Link to="/login">
                        <Button style={{margin: "0 15px 0 0"}} variant='contained'>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button variant='contained'>Register</Button>
                    </Link> </div> : <div className='navauth'>
                    <Button onClick={logoutHandler} style={{margin: "0 15px 0 0"}} variant='contained'>Logout</Button>
                    { isValidUrl(auth.image) ? <img style={{borderRadius: "50%", width: "40px", height: "40px"}} src={auth.image} /> :
                    <AccountCircleIcon style={{borderRadius: "50%", width: "40px", height: "40px"}} />}
                </div>}
            
            
        </div>
    )
}

export default Navbar