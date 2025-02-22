import ShowUsersPage from '../users/ShowUsersPage'
import { useLocation } from 'react-router-dom'
import { Container } from '@mui/material'
import './MainPage.css'

const MainPage = () => {
    const location = useLocation()
    const email = location.state?.user?.email || ''

    return (
        <Container>
            <h1>Hello {email}</h1>
            <ShowUsersPage />
        </Container>
    )
}

export default MainPage