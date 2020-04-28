import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";
import contactReducer from "./contact-reducer";


let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    contactPage: contactReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;