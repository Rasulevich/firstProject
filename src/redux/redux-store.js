import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    auth:authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;