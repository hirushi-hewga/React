import ManufacturesPage from './pages/manufacturesPage/ManufacturesPage'
import AdminPanelLayout from './components/layouts/AdminPanelLayout'
import DefaultLayout from './components/layouts/DefaultLayout'
import ShowUsersPage from './pages/admin/users/ShowUsersPage'
import ShowRolesPage from './pages/admin/roles/ShowRolesPage'
import AddUsersPage from './pages/registerPage/AddUsersPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import { darkTheme, lightTheme } from './theming/themes'
import LoginPage from './pages/loginPage/LoginPage'
import AboutPage from './pages/aboutPage/AboutPage'
import MainPage from './pages/mainPage/MainPage'
import CarsPage from './pages/carsPage/CarsPage'
import {Routes, Route} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import useAction from './hooks/useAction'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import './App.css';
import {setTheme} from "./store/reducers/themeReducer/actions";
import {refreshTokens} from "./store/reducers/authReducer/actions";

function App() {
  const {isAuth, user} = useSelector(state => state.auth)
  const {theme} = useSelector(state => state.theme)
  const {loginByToken, setTheme, refreshTokens} = useAction()

  const getAccessToken = () => {
      const cookie = document.cookie.split(';')
      for (const item in cookie) {
          const [key, value] = item.split('=')
          if (key === "at") {
              return value
          }
      }
      return null
  }

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
    const token = getAccessToken()
    if (token) {
        loginByToken(token)
    } else {
        refreshTokens()
    }

    //theme
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
        setTheme(localTheme)
    }
  }, [])

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={ <DefaultLayout /> }>
          <Route index element={ <MainPage /> } />
          <Route path="about" element={<AboutPage />} />
          <Route path="manufactures" element={<ManufacturesPage />} />
          <Route path="cars" element={<CarsPage />} />
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

        {( isAuth && user.role.includes("admin") ) && (
          <Route path="admin" element={<AdminPanelLayout />}>
            <Route path='users' >
              <Route index element={ <ShowUsersPage /> } />
            </Route>
            <Route path='roles' >
              <Route index element={ <ShowRolesPage /> } />
            </Route>
          </Route>
        )}
      </Routes>
    </ThemeProvider>
  )
}

export default App