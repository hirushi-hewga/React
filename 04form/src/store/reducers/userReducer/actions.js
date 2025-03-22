export const loadUsers = () => {
    const localData = localStorage.getItem("users")
    if (localData) {
        return {type: "USERS_LOAD", payload: JSON.parse(localData)}
    }
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