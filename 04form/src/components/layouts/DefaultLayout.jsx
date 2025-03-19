import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'

const DefaultLayout = () => {
    
    return (
        <>
            <Navbar />
            <Container sx={{minHeight: "100vh"}}>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default DefaultLayout