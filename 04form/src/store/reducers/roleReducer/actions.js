import axios from "axios"

export const loadRoles = () => async (dispatch) => {
    const responce = await axios.get("https://localhost:7112/api/role/list")

    if (responce.status === 200) {
        console.log(responce.data)
        return dispatch({type: "ROLES_LOAD", payload: responce.data})
    }

    return dispatch({type: "ERROR", payload: "roles not found"})
}

export const createRole = (role) => {
    const localData = localStorage.getItem("roles")
    let roles = []
    role.id = 1
    if (localData) {
        roles = JSON.parse(localData)
        role.id = roles[roles.length - 1].id + 1
    }
    roles.push(role)
    localStorage.setItem("roles", JSON.stringify(roles))
    return {type: "ROLE_CREATE", payload: role}
}

export const updateRole = (role) => {
    const roles = JSON.parse(localStorage.getItem("roles"))
    const index = roles.findIndex(r => r.id == role.id)
    if (index >= 0) {
        roles[index] = {...role}
        localStorage.setItem("roles", JSON.stringify(roles))
        return {type: "ROLE_UPDATE", payload: roles}
    } else {
        return {type: "ERROR", payload: "role not found"}
    }
}

export const deleteRole = (id) => {
    const localData = localStorage.getItem("roles")
    if (localData) {
        let roles = JSON.parse(localData)
        roles = roles.filter(r => r.id != id)
        localStorage.setItem("roles", JSON.stringify(roles))
        return {type: "ROLE_DELETE", payload: roles}
    }
}