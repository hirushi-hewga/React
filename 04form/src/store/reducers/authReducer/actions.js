import {jwtDecode} from 'jwt-decode'

export const login = ({email, password}) => {
    const localData = localStorage.getItem("users")
    if (localData) {
        const users = JSON.parse(localData)
        const user = users.find(u => u.email === email)
        if (user) {
            if (user.password === password) {
                localStorage.setItem("user", JSON.stringify(user))
                return {type: "USER_LOGIN", payload: user}
            } else {
                return {type: "ERROR", payload: "Invalid email or password"}
            }
        } else {
            return {type: "ERROR", payload: "Invalid email or password"}
        }
    } else {
        return {type: "ERROR", payload: "Users list not found"}
    }
}

export const register = (user) => {
    const localData = localStorage.getItem("users")
    delete user.confirmPassword
    user.id = 1
    let users = []
    if (localData) {
        users = JSON.parse(localData)
        user.id = users[users.length - 1].id + 1
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("user", JSON.stringify(user))
    return {type: "USER_REGISTER", payload: user}
}

export const logout = () => {
    localStorage.removeItem("user")
    return {type: "USER_LOGOUT"}
}

export const googleLogin = (jwtToken) => {
    const payload = jwtDecode(jwtToken)
    const localData = localStorage.getItem("users")
    if (localData) {
        const users = JSON.parse(localData)
        const user = users.find(u => u.email == payload.email)
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
            return {type: "USER_LOGIN", payload: user}
        } else {
            return {type: "ERROR", payload: "User not found"}
        }
    } else {
        return {type: "ERROR", payload: "Users list not found"}
    }
}

export const googleRegister = (jwtToken) => {
    const payload = jwtDecode(jwtToken)
    const localData = localStorage.getItem("users")
    let users = []
    const user = {
        id: 1,
        firstName: payload.given_name,
        lastName: payload.family_name,
        email: payload.email,
        image: payload.picture,
        role: "user"
    }
    if (localData) {
        users = JSON.parse(localData)
        user.id = users[users.length - 1].id + 1
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("user", JSON.stringify(user))
    return {type: "USER_REGISTER", payload: user}
}