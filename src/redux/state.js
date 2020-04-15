// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";

// let store = {
//     _state : {
//         postPage: { 
//             post:[
//             {message:'Hello people !!!', id:1},
//             {message:'Tell me why?', id:2},
//             {message:' Go on' , id:3}
//         ],
//         newPostText: 'MuslimShop'
//     },
//         dialogPage : {
//             dialog:[
//             {id: '1', name:'Arthur'},
//             {id: '2', name:'Ruslan'},
//             {id: '3', name:'Vova'}
//             ],
//             message:[
//                 {id:'1', message:'Hello Mr.'},
//                 {id:'2', message:'Where is my money?'},
//                 {id:'3', message:'I from OAE'},
//             ],
//             newMessage: 'Hi'
//         }   
//     },
//     _callSubscriber () {
//         console.log('State changed');
//     },
//     getState () {
//         return this._state;
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch (action) {
//         this._state.postPage = profileReducer (this._state.postPage , action);
//         this._state.dialogPage = dialogsReducer (this._state.dialogPage, action);
        
//         this._callSubscriber(this._state);     
//     }
// } 

window.store = store;