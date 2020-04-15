import React from 'react';
import s from './login.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';



const LoginPage = (props) => {
    const onSubmit = (formData)=>{
        props.login( formData.password, formData.rememberMe)
    }
    return ( <div>
        <h1 className ={s.loginPage}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit()}/>
        </div>
        )
}

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field component={'input'} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);
export const Login = connect(null, {login})(LoginPage);



