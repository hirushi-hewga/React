import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authReducer/authReducer"
import userReducer from "./userReducer/userReducer"
import roleReducer from "./roleReducer/roleReducer"
import themeReducer from "./themeReducer/themeReducer"
import commonReducer from "./commonReducer/commonReducer";
import carReducer from "./carReducer/carReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    role: roleReducer,
    theme: themeReducer,
    common: commonReducer,
    car: carReducer
})