const profileReducer = (state, action) => {
    switch (action.type) {
        case Add_Post:
            let newElement = {
                message: state.newPostText,
                id: '5'
            }
            state.post.push(newElement);
            state.newPostText ='';
            return state;
        case Update_New_Post_Text: 
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
 export default profileReducer;

const Add_Post =  'Add-Post';
const Update_New_Post_Text = 'Update-New-Post-Text';