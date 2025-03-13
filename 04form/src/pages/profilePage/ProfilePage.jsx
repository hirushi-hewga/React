import { AuthContext } from '../../components/providers/AuthProvider';
import { defaultAvatarUrl } from '../../settings/urls'
import { Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import './style.css'

const ProfilePage = () => {
    const { auth, login } = useContext(AuthContext)

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
        console.log(auth.image);
        
    }, [])

    function isValidUrl(url) {
        try {
            new URL(url)
            return true
        } catch (error) {
            return false
        }
    }

    return (
        <div style={{display: "flex"}}>
            <div style={{margin: "60px auto"}}>
                <h1 style={{textAlign: "center"}}>Profile settings</h1>
                <div style={{display: "flex"}}>
                    <div style={{margin: "60px 20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img style={{width: "150px", height: "150px", borderRadius: "50%"}} src={isValidUrl(auth.image) ? auth.image : defaultAvatarUrl} />
                        <span style={{fontWeight: "bold"}}>{auth.firstName} {auth.lastName}</span>
                        <span>{auth.email}</span>
                        <input style={{margin: "5px 0"}} id="imageField" placeholder='image url'/>
                        <Button variant='contained' onClick={editAvatar}>Save</Button>
                    </div>
                    <div style={{fontSize: "20px"}}>
                        <div>
                            <label className='profile-label'>Name : {auth.firstName}</label>
                        </div>
                        <div>
                            <label className='profile-label'>Surname : {auth.lastName}</label>
                        </div>
                        <div>
                            <label className='profile-label'>Mobile Number : </label>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>

        // <div style={{margin: "60px 0"}}>
        //     <div className="row">
        //         <div className="col-md-4 border-right">
        //             <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        //                 <img className="rounded-circle mt-5" width="150px" src={isValidUrl(auth.image) ? auth.image : defaultAvatarUrl}/>
        //                 <span className="font-weight-bold">{auth.firstName} {auth.lastName}</span>
        //                 <span className="text-black-50">{auth.email}</span>
        //                 <input id="imageField" placeholder='image url'/>
        //                 <Button variant='contained' onClick={editAvatar}>Save</Button>
        //             </div>
        //         </div>
        //         <div className="col-md-7 border-right">
        //             <div className="p-3 py-5">
        //                 <div className="d-flex justify-content-between align-items-center mb-3">
        //                     <h4 className="text-right">Profile Settings</h4>
        //                 </div>
        //                 <div className="row mt-2">
        //                     <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="First name" value=""/></div>
        //                     <div className="col-md-12"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="Last name"/></div>
        //                     <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="Phone number" value=""/></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProfilePage