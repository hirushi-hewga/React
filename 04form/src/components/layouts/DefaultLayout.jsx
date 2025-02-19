import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from "../navbar/Navbar"

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default DefaultLayout