import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer
});

let store = createStore(reducers);

export default store;