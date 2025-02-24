import DefaultLayout from './components/layouts/DefaultLayout'
import AddUsersPage from './pages/registerPage/AddUsersPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import EditUserPage from './pages/editUserPage/EditUserPage'
import ShowUsersPage from './pages/users/ShowUsersPage'
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem("currentUserId")
    if (userId) {
      setIsLoggedIn(true)
      setUser(userId)
    }
  }, [])

  const userLoginHandler = (id) => {
    localStorage.setItem("currentUserId", id)
    setIsLoggedIn(true)
    setUser(id)
  }

  const userLogoutHandler = () => {
    localStorage.removeItem("currentUserId")
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={ <DefaultLayout isLoggedIn={isLoggedIn} user={user} onLogout={userLogoutHandler} /> }>
          <Route index element={ <MainPage/> } />
          <Route path="register" element={ <AddUsersPage/> } />
          <Route path="login" element={ <LoginPage callBack={userLoginHandler} /> } />
          <Route path='users' >
            <Route index element={ <ShowUsersPage /> } />
            <Route path='user' element={ <EditUserPage /> } />
            <Route path='user/:id' element={ <EditUserPage isEdit={true} /> } />
          </Route>
          <Route path="*" element={ <NotFoundPage/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;