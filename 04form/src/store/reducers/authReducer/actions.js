import {jwtDecode} from 'jwt-decode'
import axios from "axios"
import http from "../../../http_common";

export const login = (values) => async (dispatch) => {
    const response = await http.post("account/login", {login: values.email, password: values.password})
    if (response.status !== 200)
        return dispatch({type: "ERROR"})

    const data = response.data
    const {accessToken, refreshToken} = data.payload

    localStorage.setItem("rt", refreshToken)
    return dispatch(loginByToken(accessToken))
}

export const refreshTokens = () => async (dispatch) => {
    const body = {
        access_token: localStorage.getItem("at"),
        refresh_token: localStorage.getItem("rt")
    }
    const response = await http.post("account/refresh", body)
    if (response.status !== 200)
        return dispatch({type: "ERROR"})

    const data = response.data
    const {accessToken, refreshToken} = data.payload

    localStorage.setItem("rt", refreshToken)
    return dispatch(loginByToken(accessToken))
}

export const loginByToken = (token) => async (dispatch) => {
    localStorage.setItem("at", token)
    document.cookie = `at=${token}; path=/`

    const user = jwtDecode(token)
    delete user.iss
    delete user.aud
    delete user.exp
    delete user.jti


    return dispatch({type: "USER_LOGIN", payload: user})
}

export const register = (values) => async (dispatch) => {
    const url = process.env.REACT_APP_BASE_URL + "account/register"
    const response = await axios.post(url, values)
    if (response.status !== 200)
        return dispatch({type: "ERROR"})

    const data = response.data
    const jwtToken = data.payload
    
    return dispatch(loginByToken(jwtToken))
}

export const logout = () => {
    localStorage.removeItem("at")
    localStorage.removeItem("rt")
    document.cookie = `at=; path=/`
    return {type: "USER_LOGOUT"}
}

//export const googleLogin = (jwtToken) => {
//    const payload = jwtDecode(jwtToken)
//    const localData = localStorage.getItem("users")
//    if (localData) {
//        const users = JSON.parse(localData)
//        const user = users.find(u => u.email == payload.email)
//        if (user) {
//            localStorage.setItem("user", JSON.stringify(user))
//            return {type: "USER_LOGIN", payload: user}
//        } else {
//            return {type: "ERROR", payload: "User not found"}
//        }
//    } else {
//        return {type: "ERROR", payload: "Users list not found"}
//    }
//}

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