const Follow =  'Follow';
const UnFollow =  'UnFollow';
const Set_Users = 'SetUsers';
const Set_Current_Page = 'Set_Current_Page';

export const followAC = (userId) => ({type: Follow, userId});
export const UnfollowAC = (userId) => ({type: UnFollow, userId});
export const setUsersAC = (users) => ({type: Set_Users, users});
export const setCurrentPageAc = (currentPage) => ({type: Set_Current_Page, currentPage});

let initialState =  {
        users:[],
        pageSize:5,
        totalUsersCount:18,
        currentPage:3
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
            return {...state,users:action.users}
        }
        case Set_Current_Page : {
            return {...state,currentPage:action.currentPage}
        }
        default:
            return state;
}
}
 export default usersReducer;

