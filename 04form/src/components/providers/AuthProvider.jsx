import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(null)
    const navigate = useNavigate()

    const login = () => {
        const localData = localStorage.getItem("auth")
        if (localData) {
            const user = JSON.parse(localData)
            setAuth(user)
        }
    }

    const logout = () => {
        localStorage.removeItem("auth")
        setAuth(null)
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider