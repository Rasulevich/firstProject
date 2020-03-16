const Add_Post =  'Add-Post';
const Update_New_Post_Text = 'Update-New-Post-Text';
const Send_Message = 'Send-Message';
const Update_New_Message = 'Update-New-Message';

let store = {
    _state : {
        postPage: { 
            post:[
            {message:'Hello people !!!', id:1},
            {message:'Tell me why?', id:2},
            {message:' Go on' , id:3}
        ],
        newPostText: 'MuslimShop'
    },
        dialogPage : {
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
        }   
    },
    _callSubscriber () {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if (action.type === Add_Post){
            let newElement = {
                message: this._state.postPage.newPostText,
                id: '5'
            }
            this._state.postPage.post.push(newElement);
            this._state.postPage.newPostText ='';
            this._callSubscriber(this._state);
        }
        else if (action.type === Update_New_Post_Text){
            this._state.postPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === Send_Message) {
            let newElement = {
                id: '4',      
                message:  this._state.dialogPage.newMessage
            }
            this._state.dialogPage.message.push(newElement);
            this._state.dialogPage.newMessage ='';
            this._callSubscriber(this._state);
        }
        else if (action.type === Update_New_Message) {
            this._state.dialogPage.newMessage = action.newText;
            this._callSubscriber( this._state);
        }
    }
} 

export const addPostActionCreator = () => ({type: Add_Post});
export const UpdateNewPostTextActionCreator = (text) => {
    return {type:Update_New_Post_Text, newText: text}
};
export const sendMessageActionCreator = () => ({type:Send_Message});
export const updateNewMessageActionCreator = (text) => {
    return {type: Update_New_Message, newText: text}
};

export default store;
window.store = store;