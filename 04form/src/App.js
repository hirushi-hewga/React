import { AuthContext } from './components/providers/AuthProvider'
import DefaultLayout from './components/layouts/DefaultLayout'
import AddUsersPage from './pages/registerPage/AddUsersPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import EditUserPage from './pages/editUserPage/EditUserPage'
import EditRolePage from './pages/editRolePage/EditRolePage'
import ShowUsersPage from './pages/users/ShowUsersPage'
import ShowRolesPage from './pages/roles/ShowRolesPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import './App.css';

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
          <Route index element={ <MainPage/> } />
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
          { auth?.role === "admin" && (
            <>
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
            </>
          )}
          <Route path="*" element={ <NotFoundPage/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;