import ShowUsersPage from '../users/ShowUsersPage'
import { Link, useLocation } from 'react-router-dom'
import { Button, Container } from '@mui/material'
import './MainPage.css'

const MainPage = () => {
    const location = useLocation()
    const email = location.state?.user?.email || ''

    return (
        <Container>
            <img width="10%" src="https://i.pinimg.com/736x/67/77/b4/6777b418fbe006d52bd74f4212dcc419.jpg"></img>
        </Container>
    )
}

export default MainPage