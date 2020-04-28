import { GetUserAuth } from "./auth-reducer";

const Set_Initialized =  '/app/Set_Initialized';

export const InitializedSucces = () => ({type:Set_Initialized });

export const initializeAPP = () => (dispatch)=>{
    let promise = dispatch(GetUserAuth());
    promise.then ( () => {
        dispatch(InitializedSucces());
    })
}
let initialState =  {
    initialized:false
    }

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case Set_Initialized: 
           return {
               ...state,
               initialized:true
           }
        default:
            return state;
}
}
export default appReducer;

