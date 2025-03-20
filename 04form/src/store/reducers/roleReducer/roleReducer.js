const roleState = {
    roles: [{id: 1, name: "admin"}, {id: 2, name: "user"}],
    isLoaded: false,
    count: 2
}

const roleReducer = (state = roleState, action) => { 
    switch (action.type) {
        case "ROLES_LOAD":
            return {...roleState, roles: action.payload, isLoaded: true, count: action.payload.length}
        case "ROLES_CREATE":
            return {...roleState, roles: [...state.roles, action.payload], count: state.count + 1}
        case "ROLES_UPDATE":
            return {...roleState, roles: action.payload}
        case "ROLES_DELETE":
            return {...roleState, roles: state.roles.filter(u => u.id != action.payload), count: state.count - 1}
        default:
            return state
    }
}

export default roleReducer