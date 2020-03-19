const Send_Message = 'Send-Message';
const Update_New_Message = 'Update-New-Message';

let initialState = {
    dialog:[
    {id: '1', name:'Arthur'},
    {id: '2', name:'Ruslan'},
    {id: '3', name:'Vova'}
    ],
    message:[
        {id:'1', message:'Hello Mr.'},
        {id:'2', message:'Where is my money?'},
        {id:'3', message:'I from OAE'},
    ],
    newMessage: 'Hi'
};   

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Send_Message:
            let newElement =  state.newMessage;
            return {
                ...state,
                newMessage: '',
                message: [...state.message, {id : 4, message: newElement}]
            }
        case Update_New_Message:
            return {
                ...state,
            newMessage: action.newText
            }
        default:
            return state;
    }
}
 export default dialogsReducer;

