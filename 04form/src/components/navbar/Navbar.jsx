import {Button, IconButton, Box, Avatar, Tooltip, Menu, MenuItem, Typography, AppBar, useTheme} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import {defaultAvatarUrl} from '../../settings/urls'
import {Link, useNavigate} from 'react-router-dom'
import useAction from '../../hooks/useAction'
import {useSelector} from 'react-redux'
import {useState} from 'react'

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const {isAuth, user} = useSelector(state => state.auth)
    const {theme} = useSelector(state => state.theme)
    const {logout, setTheme} = useAction()
    const navigate = useNavigate()
    const muiTheme = useTheme()
    
    const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget) }
    const handleCloseUserMenu = () => { setAnchorElUser(null) }

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }
    
    const settings = [
        {name: 'Profile', action: () => {navigate("/profile")}}, 
        {name: 'Logout', action: logoutHandler} 
    ]
    
    const navlinksStyle = {
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "large",
        color: muiTheme.palette.text.main
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
        <AppBar position="static" sx={{height: "60px"}}>
            <Box sx={{display: "flex", alignItems: "center", height: "100%"}}>
                <Box sx={{flexGrow: 6, display: "flex", justifyContent: "space-evenly"}}>
                    <Link style={navlinksStyle} to="/">MainPage</Link>
                    <Link style={navlinksStyle} to="/about">About</Link>
                    <Link style={navlinksStyle} to="/manufactures">Manufactures</Link>
                    <Link style={navlinksStyle} to="/cars">Cars</Link>
                    {( isAuth && user.role.includes("admin") ) && (
                        <Link style={navlinksStyle} to="/admin">AdminPanel</Link>
                    )}
                </Box>
                <Box sx={{flexGrow: 1, display: "flex", justifyContent: "right"}}>
                    {theme === "dark" ? <IconButton sx={{color: muiTheme.palette.text.main}} onClick={() => setTheme("light")}>
                        <LightModeIcon/>
                    </IconButton> : <IconButton sx={{color: muiTheme.palette.text.main}} onClick={() => setTheme("dark")}>
                        <DarkModeIcon/>
                    </IconButton>}
                </Box>   
                <Box sx={{display: "flex", justifyContent: "center", flexGrow: 1}}>
                    { !isAuth ? <Box> <Link to="/login">
                            <Button color='secondary' style={{margin: "0 15px 0 0", color: muiTheme.palette.text.main}} variant='contained'>Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button style={{color: muiTheme.palette.text.main}} color='secondary' variant='contained'>Register</Button>
                        </Link> </Box> : <Box>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={ isValidUrl(user.image) ? user.image : defaultAvatarUrl } />
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
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navbar