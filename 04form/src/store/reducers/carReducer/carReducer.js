const carState = {
    cars: null,
    isLoaded: false,
    count: 0
}

const carReducer = (state = carState, action) => {
    switch (action.type) {
        case "CARS_LOAD":
            return {...state, cars: action.payload, isLoaded: true, count: action.payload.length}
        //case "CAR_CREATE":
        //    return {...state, isLoaded: false}
        //case "CAR_UPDATE":
        //    return {...state, isLoaded: false}
        //case "CAR_DELETE":
        //    return {...state, isLoaded: false}
        default:
            return state
    }
}

export default carReducer