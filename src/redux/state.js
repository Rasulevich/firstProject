import { rerenderEnterTree } from "../render";

let state ={
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
}

export let addPost = () => {
    let newElement = {
        message: state.postPage.newPostText,
        id: '5'
    }
    state.postPage.post.push(newElement);
    state.postPage.newPostText ='';
    rerenderEnterTree(state);
};

export let updateNewPostText = (newText) => {
    state.postPage.newPostText = newText;
    rerenderEnterTree(state);
};

export let sendMessage = () => {
    let newElement = {
        id: '4',      
        message: state.dialogPage.newMessage
    }
    state.dialogPage.message.push(newElement);
    state.dialogPage.newMessage ='';
    rerenderEnterTree(state);
};
export let updateNewMessage = (newText) => {
    state.dialogPage.newMessage = newText;
    rerenderEnterTree(state);
};
export default state;