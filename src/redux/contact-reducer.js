import { usersAPI } from "../api/api";

const Friends =  'Frends';

let initialState =  {
    contact:[],
    pageSize:5,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case Friends: {
            return {...state, contact:action.contact}
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


export const setContact = (contact) => ({type:Friends, contact});



