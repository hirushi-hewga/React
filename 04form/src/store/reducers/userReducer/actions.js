const loadUsers = () => {
    const localData = localStorage.getItem("users")
    if (localData) {
        return {type: "USERS_LOAD", payload: JSON.parse(localData)}
    }
}

const createUser = (user) => {
    user.id = 1
    const localData = localStorage.getItem("users")
    const users = []
    if (localData) {
        users = JSON.parse(localData)
        user.id = users[users.length - 1].id + 1
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
    return {type: "USER_CREATE", payload: user}
}

const updateUser = (user) => {
    const users = JSON.parse(localStorage.getItem("users"))
    const index = users.findIndex(u => u.id.toString() === user.id.toString())
    if (index >= -1) {
        users[index] = {...user}
        localStorage.setItem("users", JSON.stringify(users))
        return {type: "USER_UPDATE", payload: users}
    } else {
        return {type: "ERROR", payload: "user not found"}
    }
}

const deleteUser = (id) => {
    const localData = localStorage.getItem("users")
    if (localData)
    {
        const users = JSON.parse(localData)
        users = users.filter(user => user.id !== id)
        localStorage.setItem("users", JSON.stringify(users))
        return {type: "USER_DELETE", payload: users}
    }
}