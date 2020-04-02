const Set_User_Auth =  'Set_User_Auth';



export const SetUserAuth = (userId, email , login) => ({type:Set_User_Auth , data:{userId, email, login} });


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
               ...action.data,
               isAuth:true
           }
        default:
            return state;
}
}
 export default authReducer;

