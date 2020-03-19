import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    postPage: profileReducer,
    dialogPage: dialogsReducer
});

let store = createStore(reducers);

export default store;