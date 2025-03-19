import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material'
import { AuthContext } from '../../components/providers/AuthProvider'
import { profileField, profileFieldDiv, profileModal } from './style'
import { useContext, useEffect, useState } from 'react'
import { defaultAvatarUrl } from '../../settings/urls'
import EditIcon from '@mui/icons-material/Edit';
import "./style.css"

const ProfilePage = () => {
    let { auth, login } = useContext(AuthContext)

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
                            <img style={{width: "150px", height: "150px", borderRadius: "50%", border: "1px solid black"}} src={isValidUrl(auth.image) ? auth.image : defaultAvatarUrl} />
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
                                    <EditIcon sx={{"&:hover": {cursor: "pointer"}}} style={{margin: "auto"}} variant='contained'/>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Surname : </label>
                                        <label style={profileField}>{auth.lastName}</label>
                                    </div>
                                    <EditIcon sx={{"&:hover": {cursor: "pointer"}}} style={{margin: "auto"}} variant='contained'/>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Email : </label>
                                        <label style={profileField}>{auth.email}</label>
                                    </div>
                                    <EditIcon sx={{"&:hover": {cursor: "pointer"}}} style={{margin: "auto"}} variant='contained'/>
                                </div>
                                <hr/>
                                <div style={profileFieldDiv}>
                                    <div>
                                        <label>Role : </label>
                                        <label style={profileField}>{auth.role}</label>
                                    </div>
                                    <EditIcon sx={{"&:hover": {cursor: "pointer"}}} style={{margin: "auto"}} variant='contained'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage