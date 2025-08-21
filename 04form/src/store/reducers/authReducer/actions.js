import {jwtDecode} from 'jwt-decode'
import axios from "axios"

export const login = (values) => async (dispatch) => {
    const url = process.env.REACT_APP_API_BASE_URL + "account/login"
    const response = await axios.post(url, values)
    if (response.status !== 200)
        return dispatch({type: "ERROR"})

    const data = response.data
    const jwtToken = data.payload
    
    return dispatch(loginByToken(jwtToken))
}

export const loginByToken = (token) => async (dispatch) => {
    localStorage.setItem("aut", jwtToken)
    const user = jwtDecode(jwtToken)
    delete user.iss
    delete user.aud
    delete user.exp


    return dispatch({type: "USER_LOGIN", payload: user})
}

export const register = (values) => async (dispatch) => {
    const url = process.env.REACT_APP_API_BASE_URL + "account/register"
    const response = await axios.post(url, values)
    if (response.status !== 200)
        return dispatch({type: "ERROR"})

    const data = response.data
    const jwtToken = data.payload
    
    return dispatch(loginByToken(jwtToken))
}

export const logout = () => {
    localStorage.removeItem("aut")
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