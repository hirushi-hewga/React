import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import './DefaultLayout.css'

const DefaultLayout = () => {

    
    return (
        <>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default DefaultLayout