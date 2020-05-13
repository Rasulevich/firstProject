import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/utils/helper";


const Friends =  'Frends';
const UnFollow =  'UnFollow';

let initialState =  {
    contact:[],
    pageSize:5,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case Friends: {
            return {...state, contact:action.contact}
        }
        case UnFollow:
            return {
                ...state,
                contact:updateObjectInArray(state.contact, action.userId, "id", {followed: false})
            }      
        default:
            return state;
}
}
export default contactReducer;

export const getContact = (currentPage,pageSize)=> async (dispatch) => 
    { //dispatch(toogleIsFetching(true));
      let response = await usersAPI.getContactApi(currentPage, pageSize)
            dispatch(setContact(response.data.items))
    }

export const unfollow = (userId)=> async (dispatch) => {
    let response = await usersAPI.unfollow(userId)
            if (response.data.resultCode == 0) {
            dispatch(unfollowSucces(userId))
            }
    }  



export const setContact = (contact) => ({type:Friends, contact});
export const unfollowSucces = (userId) => ({type: UnFollow, userId});




