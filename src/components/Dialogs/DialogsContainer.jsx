import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageActionCreator,updateNewMessageActionCreator } from '../../redux/state';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const ggDialogsContainer = (props) => {
    
    let state = props.store.getState().dialogPage;

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = body => {
        props.dispatch(updateNewMessageActionCreator(body));
    }

    return (
        <Dialogs updateNewMessage = {onMessageChange} sendMessage = {sendMessage}
         dialogPage = {state}/>
    )
}
let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch (updateNewMessageActionCreator(body));
        },
        sendMessage:() => {
            dispatch(sendMessageActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;