import DefaultLayout from './components/layouts/DefaultLayout'
import AddUsersPage from './pages/registerPage/AddUsersPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import EditUserPage from './pages/editUserPage/EditUserPage'
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from './pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <DefaultLayout/> }>
          <Route index element={ <MainPage/> } />
          <Route path="/addUser" element={ <AddUsersPage/> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/editUser/:id" element={ <EditUserPage /> } />
          <Route path="*" element={ <NotFoundPage/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;