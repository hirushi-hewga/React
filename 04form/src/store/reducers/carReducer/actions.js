import http from "../../../http_common";

export const loadCars = () => async (dispatch) => {
    dispatch({type: "START_LOADING"})
    const response = await http.get("car");

    if (response.status === 200){
        const data = response.data
        dispatch({type: "CARS_LOAD", payload: data.payload})
        return dispatch({type: "STOP_LOADING"})
    }

    return dispatch({type: "ERROR", payload: "cars not found"})
}