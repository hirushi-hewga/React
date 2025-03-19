import { Button, IconButton, Box, Avatar, Tooltip, Menu, MenuItem, Typography } from '@mui/material'
import { AuthContext } from '../providers/AuthProvider'
import { defaultAvatarUrl } from '../../settings/urls'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const { auth, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const settings = [
        {name: 'Profile', action: () => {navigate("/profile")}}, 
        {name: 'Logout', action: logout} 
    ]

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
                <Link to="/about">About</Link>
                {( auth?.role === "admin" ) && (
                    <Link to="/admin">AdminPanel</Link>
                )}
            </div>                            
                { !auth ? <div className='navauth'> <Link to="/login">
                        <Button style={{margin: "0 15px 0 0"}} variant='contained'>Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button variant='contained'>Register</Button>
                    </Link> </div> : <Box sx={{  display: "flex", justifyContent: "center", flexGrow: 1 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={ isValidUrl(auth.image) ? auth.image : defaultAvatarUrl } />
                            </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={() => {
                                    handleCloseUserMenu()
                                    if (setting.action) {
                                        setting.action()
                                    }
                                }}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                                </MenuItem>
                          ))}
                        </Menu>
                    </Box>
                }
            
            
        </div>
    )
}

export default Navbar