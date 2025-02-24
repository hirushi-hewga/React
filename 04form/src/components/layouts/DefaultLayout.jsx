import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import './DefaultLayout.css'

const DefaultLayout = ({ isLoggedIn = false, user = null, onLogout }) => {

    
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} userId={user} onLogout={onLogout} />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default DefaultLayout