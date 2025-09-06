import http from "../../../http_common";

export const loadUsers = () => async (dispatch) => {
    dispatch({type: "START_LOADING"})
    const response = await http.get("user")

    if (response.status === 200) {
        const {payload} = response.data
        dispatch({type: "USERS_LOAD", payload: payload})
        return dispatch({type: "STOP_LOADING"})
    }

    return dispatch({type: "ERROR"})
}

export const createUser = (user) => async (dispatch) => {
    dispatch({type: "START_LOADING"})
    const response = await http.post("user", user)

    if (response.status === 200) {
        dispatch({type: "USER_CREATE"})
        return dispatch({type: "STOP_LOADING"})
    }

    return dispatch({type: "ERROR"})
}

export const updateUser = (user) => async (dispatch) => {
    dispatch({type: "START_LOADING"})
    const response = await http.put("user", user)

    if (response.status === 200) {
        dispatch({type: "USER_UPDATE"})
        return dispatch({type: "STOP_LOADING"})
    }

    return dispatch({type: "ERROR"})
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({type: "START_LOADING"})
    const response = await http.delete(`user?id=${id}`)

    if (response.status === 200) {
        dispatch({type: "USER_DELETE"})
        return dispatch({type: "STOP_LOADING"})
    }

    return dispatch({type: "ERROR"})
}