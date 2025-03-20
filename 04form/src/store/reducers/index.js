import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authReducer/authReducer"
import userReducer from "./userReducer/userReducer"
import roleReducer from "./roleReducer/roleReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    role: roleReducer
})