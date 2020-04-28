const Send_Message = 'Send-Message';

let initialState = {
    dialog:[
    {id: '1', name:'Arthur'},
    {id: '2', name:'Ruslan'},
    {id: '3', name:'Vova'}
    ],
    message:[
        {id:'1', message:'Hello Mr.'},
        {id:'2', message:'Where is my money?'},
        {id:'3', message:'I from OAE'}
    ]
};   

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Send_Message:
            let newElement = action.newMessageChange;
            return {
                ...state,
                message: [...state.message, 
                         {id : 4, message: newElement}]
            };
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessage = (newMessageChange) => ({type:Send_Message}, newMessageChange);

