const themeState = {
    theme: "light",
    isLoaded: false,
    count: 0
}

const themeReducer = (state = themeState, action) => { 
    switch (action.type) {
        case "SWITCH_THEME":
            return {...state, theme: action.payload}
        default:
            return state
    }
}

export default themeReducer