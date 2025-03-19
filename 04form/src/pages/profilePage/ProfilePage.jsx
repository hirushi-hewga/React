import { AuthContext } from '../../components/providers/AuthProvider'
import { useContext, useEffect, useState } from 'react'
import { profileField, profileFieldDiv, profileModal } from './style'
import { defaultAvatarUrl } from '../../settings/urls'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import "./style.css"

const ProfilePage = () => {
    const { auth, login } = useContext(AuthContext)

    const [user, setUser] = useState(auth)
    const [open, setOpen] = useState(false)
    const openHandler = () => {setOpen(true)}
    const closeHandler = () => {setOpen(false)}

    const onChange = () => {

    }

    const editAvatar = () => {
        const url = document.getElementById("imageField").value
        if (url) {
            const updatedUser = {...auth, image: url}
            localStorage.setItem("auth", JSON.stringify(updatedUser))
            login()
            const localData = localStorage.getItem("users")
            if (localData) {
                const users = JSON.parse(localData)
                const index = users.findIndex(u => u.id == auth.id)
                if (index != -1) {
                    users[index].image = url
                }
                localStorage.setItem("users", JSON.stringify(users))
            }
        }
    }

    useEffect(() => {
        console.log(13242623);
        
    }, [user])

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
                        <div className="profile-image">
                            <img style={{width: "150px", height: "150px", borderRadius: "50%"}} src={isValidUrl(auth.image) ? auth.image : defaultAvatarUrl} />
                            <span style={{fontWeight: "bold"}}>{auth.firstName} {auth.lastName}</span>
                            <span>{auth.email}</span>
                            <input style={{margin: "5px 0"}} id="imageField" placeholder='image url'/>
                            <Button variant='contained' onClick={editAvatar}>Save</Button>
                        </div>
                        <hr/>
                        <div className="profile-fields">
                            <div>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Name : </label>
                                        <label style={profileField}>{auth.firstName}</label>
                                    </div>
                                    <Button onClick={openHandler} style={{margin: "auto 0 auto auto"}} variant='contained'>Change name</Button>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Surname : </label>
                                        <label style={profileField}>{auth.lastName}</label>
                                    </div>
                                    <Button style={{margin: "auto 0 auto auto"}} variant='contained'>Change surname</Button>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Email : </label>
                                        <label style={profileField}>{auth.email}</label>
                                    </div>
                                    <Button style={{margin: "auto 0 auto auto"}} variant='contained'>Change email</Button>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Role : </label>
                                        <label style={profileField}>{auth.role}</label>
                                    </div>
                                    <Button style={{margin: "auto 0 auto auto"}} variant='contained'>Change role</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
              open={open}
              onClose={closeHandler}
            >
                <Box sx={profileModal}>
                    <h1>Change name :</h1>
                    <TextField variant="outlined" type='text'  />
                </Box>
            </Modal>
        </div>
    )
}

export default ProfilePage