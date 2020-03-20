import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageActionCreator,updateNewMessageActionCreator } from '../../redux/state';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


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