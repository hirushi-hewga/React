import {Box, Button, Card, CardContent, Typography} from "@mui/material"
import {Link} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "../../components/modal/ConfirmModal";
import {useState} from "react";
import useAction from "../../hooks/useAction";
import {deleteUser} from "../../store/reducers/userReducer/actions";
import RoleCreateModal from "../../components/modal/RoleCreateModal";
import UserCreateModal from "../../components/modal/UserCreateModal";

const UserCard = ({user}) => {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [createModalOpen, setCreateModalOpen] = useState(false)
    const {deleteUser, updateUser} = useAction()
    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        User Name: {user.userName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Email: {user.email}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Full Name: {user.firstName} {user.lastName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Roles: {user.roles.map(r => r.name).join(', ')}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button variant="contained" onClick={() => setCreateModalOpen(true)}>
                            <EditIcon/>Edit
                        </Button>
                        <Button sx={{mx: 1}} variant="contained" onClick={() => setDeleteModalOpen(true)}>
                            <DeleteIcon/>Delete
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            <ConfirmModal
                title="Delete user"
                text="Are you sure?"
                open={deleteModalOpen}
                handleClose={() => setDeleteModalOpen(false)}
                action={() => deleteUser(user.id)} />
            <UserCreateModal
                title="Edit user"
                isEdit={true}
                open={createModalOpen}
                handleClose={() => setCreateModalOpen(false)}
                action={updateUser}
                user={user} />
        </>
    );
}

export default UserCard;