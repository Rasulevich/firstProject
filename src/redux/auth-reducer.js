import { authAPI } from "../api/api";

const Set_User_Auth =  'Set_User_Auth';

export const SetUserAuth = (userId, email , login, isAuth) => ({type:Set_User_Auth , 
                                                      payload:{userId, email, login, isAuth} });

export const GetUserAuth = () =>( dispatch) => {
    authAPI.me()
    .then(data => {
        if (data.resultCode === 0) {
            let {id,email,login} = data.data;
            dispatch(SetUserAuth(id, email, login, true))
        }
    });
}

export const login = (email,password,rememberMe) =>( dispatch) => {
    authAPI.login(email,password,rememberMe)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(GetUserAuth());
        }
    });
}

export const logout = () =>( dispatch) => {
    authAPI.login()
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(SetUserAuth(null, null, null, false))
        }
    });
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

