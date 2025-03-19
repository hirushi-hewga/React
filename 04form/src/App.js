import { AuthContext } from './components/providers/AuthProvider'
import DefaultLayout from './components/layouts/DefaultLayout'
import AddUsersPage from './pages/registerPage/AddUsersPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import EditUserPage from './pages/admin/users/editUserPage/EditUserPage'
import EditRolePage from './pages/admin/roles/editRolePage/EditRolePage'
import ShowUsersPage from './pages/admin/users/ShowUsersPage'
import ShowRolesPage from './pages/admin/roles/ShowRolesPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import './App.css';
import AdminPanelLayout from './components/layouts/AdminPanelLayout'
import AboutPage from './pages/aboutPage/AboutPage'

function App() {

  const { auth, login } = useContext(AuthContext)
  //const [roles, setRoles] = useState()
  
  useEffect(() => {
    login()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={ <DefaultLayout /> }>
          <Route index element={ <MainPage /> } />
          <Route path="about" element={ <AboutPage /> } />
          { !auth ? (
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

        {( auth?.role === "admin" ) && (
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
    </>
  );
}

export default App;