import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import { Field } from 'redux-form';


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
export const Dialogs = (props) => {
    
    
    let dialogsElement = props.dialogPage.dialog.map (d => (<DialogItem name= {d.name} id ={d.id}/>)); 
    let messagesElement =props.dialogPage.message.map(m =>(<MessageItem message = {m.message} id ={m.id} />));
    
    let newMessageArea = React.createRef();
    let onSendMessage = () => {
        props.sendMessage();
        newMessageArea.current.value ='';
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);
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
                   <button onClick = {onSendMessage}> Send Message</button>
               </div>
            </div>
        </div>
    )
}

const DialogForm = (props) =>{
    return (
        <form>
            <Field component={'textarea'}  name ={newMessage }/> 
               <div>
                   <button onClick> Send Message</button>
                   </div>
        </form>
    )
}