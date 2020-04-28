import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const Set_User_Auth =  'Set_User_Auth';

export const SetUserAuth = (userId, email , login, isAuth) => 
                                        ({type:Set_User_Auth , 
                                          payload:{userId, email, login, isAuth} });

export const GetUserAuth = () =>async ( dispatch) => {
    let response = await authAPI.me()
         if (response.data.resultCode === 0) {
            let {id,email,login} = response.data.data;
            dispatch(SetUserAuth(id, email, login, true))
            }
}

export const login = (email,password,rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email,password,rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(GetUserAuth());
        } else {
          //  let message = Response.data.messages.length > 0 ? Response.data.mesages[0]: "Some error";
            dispatch(stopSubmit("login", {_error:"message"}));
        }
}

export const logout = () =>async (dispatch) => {
    let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(SetUserAuth(null, null, null, false))
        }
}
let initialState =  {
        userId:null,
        email:null,
        login:null,
        isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Set_User_Auth: 
           return {
               ...state,
               ...action.payload,
           }
        default:
            return state;
}
}
export default authReducer;

