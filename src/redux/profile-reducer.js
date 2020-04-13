import { usersAPI, profileAPI } from "../api/api";

const Add_Post =  'Add-Post';
const set_User_Profile = 'setUserProfile';
const Set_Status = 'Set_Status';

let initialState =  {
        post:[
        {message:'Hello people !!!', id:1},
        {message:'Tell me why?', id:2},
        {message:' Go on' , id:3}
    ],
    newPostText: 'MuslimShop',
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


export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(Response => {
            dispatch(setUserProfile(Response.data))
          });
      }
    }

 export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(Response => {
            dispatch(setStatus(Response.data))
            });
          }
        }

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(Response => {
            if (Response.data.resultCode ===0){
            dispatch(setStatus(status))
            }
          });
      }
    }
    
export const addPost = (postText) => ({type: Add_Post, postText});
