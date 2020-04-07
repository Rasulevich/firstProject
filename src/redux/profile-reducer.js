import { usersAPI } from "../api/api";

const Add_Post =  'Add-Post';
const Update_New_Post_Text = 'Update-New-Post-Text';
const set_User_Profile = 'setUserProfile';

let initialState =  {
        post:[
        {message:'Hello people !!!', id:1},
        {message:'Tell me why?', id:2},
        {message:' Go on' , id:3}
    ],
    newPostText: 'MuslimShop',
    profile:null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post: {
            let newElement = {
                message: state.newPostText,
                id: '5'
            };
            return {
                ...state,
                post:[...state.post,newElement],
                newPostText:''};
            }
        case Update_New_Post_Text:
            return {
                ...state,
                newPostText:action.newText}; 
        case set_User_Profile: {
            return {...state, profile:action.profile}
        }
        default:
            return state;
}
}
export default profileReducer;

export const setUserProfile = (profile) => ({type:set_User_Profile, profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
        .then(Response => {
            dispatch(setUserProfile(Response.data))
          });
      }
    }
