import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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
        props.sendMessage();
        newMessageArea.current.value ='';
    }
    let onMessageCghange = () => {
        let text = newMessageArea.current.value;
  props.updateNewMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
            {dialogsElement}                
            </div>
            <div className={s.messages}>
               {messagesElement}
               <textarea onChange ={onMessageCghange } ref = {newMessageArea} value ={props.newMessage }/> 
               <div>
                   <button onClick = {sendMessage}> Send Message</button>
               </div>
            </div>
        </div>
    )
}
export default Dialogs;