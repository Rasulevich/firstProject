import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import  { addPost, updateNewPostText, sendMessage, updateNewMessage } from './redux/state';

export let rerenderEnterTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage}
        updateNewMessage = {updateNewMessage} /> 
        </BrowserRouter>, document.getElementById('root'));
};

