import axios from "axios"

export const loadUsers = () => async (dispatch) => {
    //const localData = localStorage.getItem("users")
    //if (localData) {
    //    return {type: "USERS_LOAD", payload: JSON.parse(localData)}
    //}

    const responce = await axios.get("https://localhost:7112/api/user/list")

    if (responce.status === 200) { 
        return dispatch({type: "USERS_LOAD", payload: responce.data})
    }

    return dispatch({type: "ERROR", payload: "users not found"})
}

export const createUser = (user) => {
    user.id = 1
    const localData = localStorage.getItem("users")
    let users = []
    if (localData) {
        users = JSON.parse(localData)
        user.id = users[users.length - 1].id + 1
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    return {type: "USER_CREATE", payload: user}
}

export const updateUser = (user) => {
    const users = JSON.parse(localStorage.getItem("users"))
    const index = users.findIndex(u => u.id == user.id)
    if (index >= 0) {
        users[index] = {...user}
        localStorage.setItem("users", JSON.stringify(users))
        return {type: "USER_UPDATE", payload: users}
    } else {
        return {type: "ERROR", payload: "user not found"}
    }
}

export const deleteUser = (id) => {
    const localData = localStorage.getItem("users")
    if (localData) {
        let users = JSON.parse(localData)
        users = users.filter(u => u.id !== id)
        localStorage.setItem("users", JSON.stringify(users))
        return {type: "USER_DELETE", payload: users}
    }
}