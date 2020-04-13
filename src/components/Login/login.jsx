import React from 'react';
import s from './login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={'input'}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={'input'}/>
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

const LoginReduxForm = reduxForm ({form:'login'})(LoginForm)
const onSubmit = (formData)=>{
    
}
export const LoginPage = (props) => {
    return ( <div>
        <h1 className ={s.loginPage}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit()}/>
        </div>
        )
}