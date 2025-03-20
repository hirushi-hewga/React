const userState = {
    users: [],
    isLoaded: false,
    count: 0
}

const userReducer = (state = userState, action) => { 
    switch (action.type) {
        case "USERS_LOAD":
            return {...userState, users: action.payload, isLoaded: true, count: action.payload.length}
        case "USER_CREATE":
            return {...userState, users: [...state.users, action.payload], count: state.count + 1}
        case "USER_UPDATE":
            return {...userState, users: action.payload}
        case "USER_DELETE":
            return {...userState, users: action.payload}
        default:
            return state
    }
}

export default userReducer