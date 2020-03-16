import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { sendMessageActionCreator,updateNewMessageActionCreator } from '../../redux/state';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    
    
    let dialogsElement = props.state.dialog.map (d => (<DialogItem name= {d.name} id ={d.id}/>)); 
    let messagesElement =props.state.message.map(m =>(<MessageItem message = {m.message} id ={m.id} />));
    
    let newMessageArea = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
        newMessageArea.current.value ='';
    }
    let onMessageChange = () => {
        let text = newMessageArea.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
            {dialogsElement}                
            </div>
            <div className={s.messages}>
               {messagesElement}
               <textarea onChange ={onMessageChange } ref = {newMessageArea} value ={props.newMessage }/> 
               <div>
                   <button onClick = {sendMessage}> Send Message</button>
               </div>
            </div>
        </div>
    )
}
export default Dialogs;