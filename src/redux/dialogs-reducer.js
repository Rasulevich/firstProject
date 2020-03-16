const dialogsReducer = (state, action) => {
    switch (action.type) {
        case Send_Message:
            let newElement = {
                id: '4',      
                message: state.newMessage
            }
            state.message.push(newElement);
            state.newMessage ='';
            return state;
        case Update_New_Message:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}
 export default dialogsReducer;

const Send_Message = 'Send-Message';
const Update_New_Message = 'Update-New-Message';