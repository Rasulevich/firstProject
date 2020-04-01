const Follow =  'Follow';
const UnFollow =  'UnFollow';
const Set_Users = 'SetUsers';
const Set_Current_Page = 'Set_Current_Page';
const Set_Total_Users_Count = 'Set_Total_Users_Count';
const Toogle_Is_Fetching = 'Toogle_Is_Fetching';

export const followAC = (userId) => ({type: Follow, userId});
export const UnfollowAC = (userId) => ({type: UnFollow, userId});
export const setUsersAC = (users) => ({type: Set_Users, users});
export const setCurrentPageAc = (currentPage) => ({type: Set_Current_Page, currentPage});
export const setTotalUsersCountAC= (totalUsersCount) => ({type: Set_Total_Users_Count, count:totalUsersCount});
export const toogleIsFetchingAC= (isFetching) => ({type: Toogle_Is_Fetching, isFetching});


let initialState =  {
        users:[],
        pageSize:5,
        totalUsersCount:0,
        currentPage:3,
        isFetching:true
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
        case Set_Total_Users_Count : {
            return {...state,totalUsersCount:action.count}
        }
        case Toogle_Is_Fetching : {
            return {...state,isFetching:action.isFetching}
        }
        default:
            return state;
}
}
 export default usersReducer;

