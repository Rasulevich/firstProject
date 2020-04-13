import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    auth:authReducer,
    form:formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;