const Add_Post =  'Add-Post';
const Update_New_Post_Text = 'Update-New-Post-Text';


let initialState =  {
        post:[
        {message:'Hello people !!!', id:1},
        {message:'Tell me why?', id:2},
        {message:' Go on' , id:3}
    ],
    newPostText: 'MuslimShop'
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
        default:
            return state;
}
}
 export default profileReducer;

