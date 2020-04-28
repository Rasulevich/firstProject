import React, { memo } from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../utils/validators';
import { Textarea } from '../common/FormsControls/FormsControls';


const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
    )
}

const MessageItem = (props) => {
    return <div className={s.message}>{props.message}</div>
} 

const Dialogs = React.memo(props => {
    let dialogsElement = props.dialogPage.dialog.map (d => (<DialogItem name= {d.name} id ={d.id}/>)); 
    let messagesElement =props.dialogPage.message.map(m =>(<MessageItem message = {m.message} id ={m.id} />));
    
    // let onSendMessage = () => {
    //     props.sendMessage();
    //     newMessageArea.current.value ='';
    // }
    // let onMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessage(body);
    // }
    let newMessage = (value) => { 
        props.sendMessage(value.newMessageChange);
       // alert ('gggg')
     }
  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
            {dialogsElement}                
            </div>
            <div className={s.messages}>
               {messagesElement}
               <DialogChangeForm onSubmit={newMessage}/>
            </div>
        </div>
    )
});
export default Dialogs;

const maxLength100 = maxLengthCreator(100);
const DialogChange = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea} name="newMessageChange" validate={[required, maxLength100]}/> 
            </div>
               <div>
                   <button > Send Message</button>
                   </div>
        </form>
    )
}
const DialogChangeForm = reduxForm({form:'dialogChangeForm'})(DialogChange);