const Follow =  'Follow';
const UnFollow =  'UnFollow';
const Set_Users = 'SetUsers';

export const followAC = (userId) => ({type: Follow, userId});
export const UnfollowAC = (userId) => ({type: UnFollow, userId});
export const setUsersAC = (users) => ({type: Set_Users, users});

let initialState =  {
        users:[
        ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow: 
            return {
                ...state, 
                users:state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u , followed: true}
                    }
                    return u;
                })
            }
        case UnFollow:
            return {
                ...state,
                users:state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case Set_Users : {
            return {...state,users:[...state.users,...action.users]}
        }
        default:
            return state;
}
}
 export default usersReducer;

