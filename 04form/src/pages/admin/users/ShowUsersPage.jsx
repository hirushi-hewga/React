import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const ShowUsersPage = () => {
    const dispatch = useDispatch()
    const { users, isLoaded } = useSelector(state => state.user)

    useEffect(() => {
        if (!isLoaded) {
            const json = localStorage.getItem("users")
            if (!json) {
                localStorage.setItem("users", JSON.stringify(users))
                dispatch({ type: "USERS_LOAD", payload: users })
            } else {
                const data = JSON.parse(json)
                dispatch({ type: "USERS_LOAD", payload: data })
            }
        }
    }, [])

    function deleteUser(id) {
        dispatch({ type: "USER_DELETE", payload: id })
        users = users.filter(user => user.id !== id)
        localStorage.setItem("users", JSON.stringify(users))
    }

    const showUsers = () => {
        if (users) {
            document.getElementById("usersTableContainer").hidden = false
        }
    }

    return (
        <>
            <Box>
                <h1>Users</h1>
            </Box>
            <Button variant='contained' onClick={showUsers}>Show users</Button>
            <Link style={{"marginLeft": "10px"}} to="user">
                <Button variant='contained'>Create User</Button>
            </Link>
            <TableContainer id="usersTableContainer" hidden component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map(({id, firstName, lastName, email, role}) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {id}
                                </TableCell>
                                <TableCell align="center">{firstName}</TableCell>
                                <TableCell align="center">{lastName}</TableCell>
                                <TableCell align="center">{email}</TableCell>
                                <TableCell align="center">{role}</TableCell>
                                <TableCell align="right">
                                    <Link to={`user/${id}`}>
                                        <EditIcon />
                                    </Link>
                                </TableCell>
                                <TableCell align="left">
                                    <DeleteIcon sx={{"&:hover": {cursor: "pointer"}}} onClick={() => {deleteUser(id)}} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ShowUsersPage