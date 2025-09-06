const userState = {
    users: [],
    isLoaded: false,
    count: 0
}

const userReducer = (state = userState, action) => { 
    switch (action.type) {
        case "USERS_LOAD":
            return {...state, users: action.payload, isLoaded: true, count: action.payload.length}
        case "USER_CREATE":
            return {...state, isLoaded: false}
        case "USER_UPDATE":
            return {...state, isLoaded: false}
        case "USER_DELETE":
            return {...state, isLoaded: false}
        default:
            return state
    }
}

export default userReducer