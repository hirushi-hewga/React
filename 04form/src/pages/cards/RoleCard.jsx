import {Box, Button, Card, CardContent, Typography} from "@mui/material"
import ConfirmModal from "../../components/modal/ConfirmModal";
import {useState} from "react";
import useAction from "../../hooks/useAction";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "react-router-dom";
import RoleCreateModal from "../../components/modal/RoleCreateModal";

const RoleCard = ({role}) => {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [createModalOpen, setCreateModalOpen] = useState(false)
    const {updateRole, deleteRole} = useAction()

    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {role.name}
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
                title="Delete role"
                text="Are you sure?"
                open={deleteModalOpen}
                handleClose={() => setDeleteModalOpen(false)}
                action={() => deleteRole(role.id)} />
            <RoleCreateModal
                title="Edit role"
                isEdit={true}
                open={createModalOpen}
                handleClose={() => setCreateModalOpen(false)}
                action={updateRole}
                role={role} />
        </>
    );
}

export default RoleCard;