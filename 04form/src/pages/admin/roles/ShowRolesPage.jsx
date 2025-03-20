import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const ShowRolesPage = () => {
    const dispatch = useDispatch()
    const { roles, isLoaded } = useSelector(state => state.role)

    useEffect(() => {
        if (!isLoaded) {
            const json = localStorage.getItem("roles")
            if (!json) {
                localStorage.setItem("roles", JSON.stringify(roles))
                dispatch({ type: "ROLES_LOAD", payload: roles })
            } else {
                const data = JSON.parse(json)
                dispatch({ type: "ROLES_LOAD", payload: data })
            }
        }
    }, [])

    function deleteRole(id) {
        dispatch({ type: "ROLES_DELETE", payload: id })
        const array = roles.filter(role => role.id !== id)
        localStorage.setItem("roles", JSON.stringify(array))
    }

    return (
        <>
            <Box>
                <h1>Roles</h1>
            </Box>
            <Link to="role">
                <Button variant='contained'>Create Role</Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Role</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roles?.map(({id, name}) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {id}
                                </TableCell>
                                <TableCell align="center">{name}</TableCell>
                                { ( name !== "admin" && name !== "user" ) ? (
                                    <>
                                        <TableCell align="right">
                                            <Link to={`role/${id}`}>
                                                <EditIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell align="left">
                                            <DeleteIcon sx={{"&:hover": {cursor: "pointer"}}} onClick={() => {deleteRole(id)}} />
                                        </TableCell>
                                    </>
                                ) : (
                                    <>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>
                                    </>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ShowRolesPage