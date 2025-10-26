import * as authActions from "../reducers/authReducer/actions"
import * as userActions from "../reducers/userReducer/actions"
import * as roleActions from "../reducers/roleReducer/actions"
import * as themeActions from "../reducers/themeReducer/actions"
import * as carActions from "../reducers/carReducer/actions"

const actionCreator = {
    ...authActions,
    ...userActions,
    ...roleActions,
    ...themeActions,
    ...carActions
}

export default actionCreator