import { usersAPI, profileAPI } from "../api/api";

const Add_Post =  'Add-Post';
const set_User_Profile = 'setUserProfile';
const Set_Status = 'Set_Status';

let initialState =  {
        post:[
        {message:'Hello people !!!', id:1},
        {message:'How are you?', id:2},
        {message:' Go on' , id:3}
    ],
    newPostText: 'New Text',
    profile:null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post: {
            let newElement = {
                message: action.postText,
                id: '5'
            };
            return {
                ...state,
                post:[...state.post,newElement],
                newPostText:''};
            }
        
        case set_User_Profile: {
            return {...state, profile:action.profile}
        }
        case Set_Status: {
            return {...state, status:action.status}
        }
        default:
            return state;
}
}
export default profileReducer;

export const setUserProfile = (profile) => ({type:set_User_Profile, profile});
export const setStatus = (status) => ({type:Set_Status, status});


export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
      }
    

 export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
          }

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0){
            dispatch(setStatus(status))
            }
      }
    
export const addPost = (postText) => ({type: Add_Post, postText});
