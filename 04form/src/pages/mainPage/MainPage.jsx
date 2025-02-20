import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { useLocation } from 'react-router-dom'
import './MainPage.css'

const MainPage = () => {
    const showUsers = () => {
        document.getElementById("usersTableContainer").hidden = false
    }

    const location = useLocation()
    const email = location.state?.user?.email || ''


    const users = localStorage.getItem("users")
    const array = JSON.parse(users)
    return (
        <Container>
            <h1>Hello {email}</h1>
            <Button variant='contained' onClick={showUsers}>Show users</Button>


            <TableContainer id="usersTableContainer" hidden component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.map((user) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {user.firstName}
                                </TableCell>
                                <TableCell align="center">{user.lastName}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{user.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </Container>
    )
}

export default MainPage