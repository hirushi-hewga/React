import { Box, Button, FormControlLabel, IconButton, Modal, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { AuthContext } from '../../components/providers/AuthProvider'
import { profileField, profileFieldDiv, profileModal } from './style'
import { useContext, useEffect, useState } from 'react'
import { defaultAvatarUrl } from '../../settings/urls'
import EditIcon from '@mui/icons-material/Edit';
import "./style.css"
import { useNavigate } from 'react-router-dom'
import useAction from '../../hooks/useAction'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const {login} = useAction()
    const {user} = useSelector(state => state.auth)
    const navigate = useNavigate()
    
    const [avatarOpen, setAvatarOpen] = useState(false);
    const avatarHandleOpen = () => setAvatarOpen(true);
    const avatarHandleClose = () => setAvatarOpen(false);

    const [nameOpen, setNameOpen] = useState(false);
    const nameHandleOpen = () => setNameOpen(true);
    const nameHandleClose = () => setNameOpen(false);

    const [surnameOpen, setSurnameOpen] = useState(false);
    const surnameHandleOpen = () => setSurnameOpen(true);
    const surnameHandleClose = () => setSurnameOpen(false);

    const [passwordOpen, setPasswordOpen] = useState(false);
    const passwordHandleOpen = () => setPasswordOpen(true);
    const passwordHandleClose = () => setPasswordOpen(false);

    const editAvatar = (url) => {
        if (isValidUrl(url)) {
            const updatedUser = {...user, image: url}
            localStorage.setItem("user", JSON.stringify(updatedUser))
            const localData = localStorage.getItem("users")
            if (localData) {
                const users = JSON.parse(localData)
                const index = users.findIndex(u => u.id == user.id)
                if (index != -1) {
                    users[index].image = url
                }
                localStorage.setItem("users", JSON.stringify(users))
            }
            login(updatedUser)
        }
    }

    const editName = (name) => {
        if (name && name.length <= 50) {
            const updatedUser = {...user, firstName: name}
            localStorage.setItem("user", JSON.stringify(updatedUser))
            const localData = localStorage.getItem("users")
            if (localData) {
                const users = JSON.parse(localData)
                const index = users.findIndex(u => u.id == user.id)
                if (index != -1) {
                    users[index].firstName = name
                }
                localStorage.setItem("users", JSON.stringify(users))
            }
            login(updatedUser)
        }
    }

    const editSurname = (surname) => {
        if (surname && surname.length <= 50) {
            const updatedUser = {...user, lastName: surname}
            localStorage.setItem("user", JSON.stringify(updatedUser))
            const localData = localStorage.getItem("users")
            if (localData) {
                const users = JSON.parse(localData)
                const index = users.findIndex(u => u.id == user.id)
                if (index != -1) {
                    users[index].lastName = surname
                }
                localStorage.setItem("users", JSON.stringify(users))
            }
            login(updatedUser)
        }
    }

    const editPassword = (password) => {
        const updatedUser = {...user, password: password}
        localStorage.setItem("user", JSON.stringify(updatedUser))
        const localData = localStorage.getItem("users")
        if (localData) {
            const users = JSON.parse(localData)
            const index = users.findIndex(u => u.id == user.id)
            if (index != -1) {
                users[index].password = password
            }
            localStorage.setItem("users", JSON.stringify(users))
        }
        login(updatedUser)
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
        <div>
            <div style={{display: "flex", backgroundColor: "darkgray", margin: "60px auto", borderRadius: "1%"}}>
                <div style={{width: "100%"}}>
                    <div style={{backgroundColor: "gray"}}>
                        <h1 style={{textAlign: "center"}}>Profile settings</h1>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-evenly", margin: "30px 0"}}>
                        <div className="profile-image" style={{display: "flex", justifyContent: "center"}}>
                            <IconButton onClick={avatarHandleOpen}>
                                <EditIcon />
                            </IconButton>
                            <img style={{width: "150px", height: "150px", borderRadius: "50%", border: "1px solid black"}} src={isValidUrl(user.image) ? user.image : defaultAvatarUrl} />
                            <span style={{fontWeight: "bold"}}>{user.firstName} {user.lastName}</span>
                            <span>{user.email}</span>
                        </div>
                        <hr/>
                        <div className="profile-fields">
                            <div>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Name : </label>
                                        <label style={profileField}>{user.firstName}</label>
                                    </div>
                                    <EditIcon onClick={nameHandleOpen} sx={{"&:hover": {cursor: "pointer"}}} style={{margin: "auto"}} variant='contained'/>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Surname : </label>
                                        <label style={profileField}>{user.lastName}</label>
                                    </div>
                                    <EditIcon onClick={surnameHandleOpen} sx={{"&:hover": {cursor: "pointer"}}} style={{margin: "auto"}} variant='contained'/>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Email : </label>
                                        <label style={profileField}>{user.email}</label>
                                    </div>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Role : </label>
                                        <label style={profileField}>{user.role}</label>
                                    </div>
                                </div>
                                {user.password && <Button onClick={passwordHandleOpen} variant='contained' style={{width: "50%", margin: "auto"}}>Change password</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
              onClose={avatarHandleClose}
              open={avatarOpen}
            >
                <Box sx={profileModal}>
                    <h2>Change avatar</h2>
                    <TextField id="profile-avatar-input" placeholder='Image URL' style={{width: "100%", height: "25px"}} />
                    <Button onClick={() => {
                        editAvatar(document.getElementById('profile-avatar-input').value)
                        avatarHandleClose()
                    }} sx={{mt: 5}} variant='contained'>Save</Button>
                </Box>
            </Modal>
            <Modal 
              onClose={nameHandleClose}
              open={nameOpen}
            >
                <Box sx={profileModal}>
                    <h2>Change name</h2>
                    <TextField id="profile-name-input" placeholder='Name' style={{width: "100%", height: "25px"}} />
                    <Button onClick={() => {
                        editName(document.getElementById('profile-name-input').value)
                        nameHandleClose()
                    }} sx={{mt: 5}} variant='contained'>Save</Button>
                </Box>
            </Modal>
            <Modal 
              onClose={surnameHandleClose}
              open={surnameOpen}
            >
                <Box sx={profileModal}>
                    <h2>Change surname</h2>
                    <TextField id="profile-surname-input" placeholder='Surname' style={{width: "100%", height: "25px"}} />
                    <Button onClick={() => {
                        editSurname(document.getElementById('profile-surname-input').value)
                        surnameHandleClose()
                    }} sx={{mt: 5}} variant='contained'>Save</Button>
                </Box>
            </Modal>
            <Modal 
              onClose={passwordHandleClose}
              open={passwordOpen}
            >
                <Box sx={profileModal}>
                    <h2>Change password</h2>
                    <TextField id="profile-password-input" placeholder='Password' style={{width: "100%", height: "25px"}} />
                    <TextField sx={{mt: 5}} id="profile-newPassword-input" placeholder='New Password' style={{width: "100%", height: "25px"}} />
                    <TextField sx={{mt: 5}} id="profile-confirmPassword-input" placeholder='Confirm Password' style={{width: "100%", height: "25px"}} />
                    <Button onClick={() => {
                        const password = document.getElementById('profile-password-input').value
                        const newPassword = document.getElementById('profile-newPassword-input').value
                        const confirmPassword = document.getElementById('profile-confirmPassword-input').value
                        if (password === user.password && newPassword === confirmPassword && newPassword.length >= 8) {
                            editPassword(newPassword)
                            alert('пароль змінено')
                        }
                        passwordHandleClose()
                    }} sx={{mt: 5}} variant='contained'>Save</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default ProfilePage