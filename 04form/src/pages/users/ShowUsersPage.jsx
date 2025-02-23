import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShowUsersPage = () => {
    const [users, setUsers] = useState([])
    
    const json = localStorage.getItem("users")

    useEffect(() => {
        if (json) {
            const array = JSON.parse(json)
            setUsers(array)
        }
    }, [])

    function deleteUser(id) {
        setUsers(users.filter(user => user.id !== id))
        localStorage.setItem("users", JSON.stringify(users))
    }

    const showUsers = () => {
        if (users) {
            document.getElementById("usersTableContainer").hidden = false
        }
    }

    return (
        <>
            <Button variant='contained' onClick={showUsers}>Show users</Button>
            <Link style={{"marginLeft": "10px"}} to="/addUser">
                <Button variant='contained'>Add User</Button>
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
                                    <Link to={`editUser/${id}`}>
                                        <Button variant='contained'>Edit</Button>
                                    </Link>
                                </TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => {deleteUser(id)}} variant='contained'>Delete</Button>
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