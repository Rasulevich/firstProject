import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/helper";

const Follow =  'Follow';
const UnFollow =  'UnFollow';
const Set_Users = 'SetUsers';
const Set_Current_Page = 'Set_Current_Page';
const Set_Total_Users_Count = 'Set_Total_Users_Count';
const Toogle_Is_Fetching = 'Toogle_Is_Fetching';

export const followSuccess = (userId) => ({type: Follow, userId});
export const unfollowSucces = (userId) => ({type: UnFollow, userId});
export const setUsers = (users) => ({type: Set_Users, users});
export const setCurrentPage = (currentPage) => ({type: Set_Current_Page, currentPage});
export const setTotalUsersCount= (totalUsersCount) => ({type: Set_Total_Users_Count, count:totalUsersCount});
export const toogleIsFetching= (isFetching) => ({type: Toogle_Is_Fetching, isFetching});


export const getUsers = (currentPage,pageSize)=> async (dispatch) => {
        dispatch(toogleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))        
    }


export const follow = (userId)=> async (dispatch) => {
       let response = await usersAPI.follow(userId)
            if (response.data.resultCode == 0) {
            dispatch(followSuccess(userId))
            }
    }


export const unfollow = (userId)=> async (dispatch) => {
    let response = await usersAPI.unfollow(userId)
            if (response.data.resultCode == 0) {
            dispatch(unfollowSucces(userId))
            }
    }

    let initialState =  {
        users:[],
        pageSize:5,
        totalUsersCount:0,
        currentPage:1,
        isFetching:true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow: 
            return {
                ...state, 
                users:updateObjectInArray(state.users,action.userId, "id", {followed: true})
            }
        case UnFollow:
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userId, "id", {followed: false})
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

