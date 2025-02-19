import DefaultLayout from './components/layouts/DefaultLayout'
import RegisterPage from './pages/registerPage/RegisterPage'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
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
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="*" element={ <NotFoundPage /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;