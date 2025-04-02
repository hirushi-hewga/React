import EditUserPage from './pages/admin/users/editUserPage/EditUserPage'
import EditRolePage from './pages/admin/roles/editRolePage/EditRolePage'
import AdminPanelLayout from './components/layouts/AdminPanelLayout'
import DefaultLayout from './components/layouts/DefaultLayout'
import ShowUsersPage from './pages/admin/users/ShowUsersPage'
import ShowRolesPage from './pages/admin/roles/ShowRolesPage'
import AddUsersPage from './pages/registerPage/AddUsersPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import LoginPage from './pages/loginPage/LoginPage'
import AboutPage from './pages/aboutPage/AboutPage'
import MainPage from './pages/mainPage/MainPage'
import {Routes, Route} from 'react-router-dom'
import useAction from './hooks/useAction'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import './App.css';
import {ThemeProvider} from '@mui/material'
import { darkTheme, lightTheme } from './theming/themes'

function App() {
  const {isAuth, user} = useSelector(state => state.auth)
  const {theme} = useSelector(state => state.theme)
  const {login} = useAction()

  // load role list
  useEffect(() => {
    const localData = localStorage.getItem("roles")
    if (!localData) {
      localStorage.setItem("roles", JSON.stringify([
        {
          id: 1,
          name: "admin"
        },
        {
          id: 2,
          name: "user"
        }
      ]))
    }
  })
  
  // load user list
  useEffect(() => {
    const localData = localStorage.getItem("users")
    if (!localData) {
      localStorage.setItem("users", JSON.stringify([{
        id:1,
        firstName:"user",
        lastName:"user",
        email:"user@gmail.com",
        password:"qwerty-1",
        role:"user",
        image:"https://i.pinimg.com/736x/51/d4/b1/51d4b10f6db71fc3b6f2a4806f30a299.jpg"
      },{
        id:2,
        firstName:"admin",
        lastName:"admin",
        email:"admin@gmail.com",
        password:"qwerty-1",
        role:"admin",
        image:"https://i.pinimg.com/736x/51/d4/b1/51d4b10f6db71fc3b6f2a4806f30a299.jpg"
      }]))
    }
  }, [])

  // user login
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      login(JSON.parse(user))
    }
  }, [])

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={ <DefaultLayout /> }>
          <Route index element={ <MainPage /> } />
          <Route path="about" element={ <AboutPage /> } />
          { !isAuth ? (
            <>
              <Route path="register" element={ <AddUsersPage/> } />
              <Route path="login" element={ <LoginPage /> } />
            </>
          ) : (
            <>
              <Route path="profile" element={ <ProfilePage /> } />
            </>
          )}
          <Route path="*" element={ <NotFoundPage /> } />
        </Route>

        {/* /////////////////////////////////////////////////////// */}

        {( isAuth && user.role === "admin" ) && (
          <Route path="admin" element={<AdminPanelLayout />}>
            <Route path='users' >
              <Route index element={ <ShowUsersPage /> } />
              <Route path='user' element={ <EditUserPage /> } />
              <Route path='user/:id' element={ <EditUserPage isEdit={true} /> } />
            </Route>
            <Route path='roles' >
              <Route index element={ <ShowRolesPage /> } />
              <Route path='role' element={ <EditRolePage /> } />
              <Route path='role/:id' element={ <EditRolePage isEdit={true} /> } />
            </Route>
          </Route>
        )}
      </Routes>
    </ThemeProvider>
  )
}

export default App