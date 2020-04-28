import React from 'react';
import s from './login.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'




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
           {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginPage = (props) => {
    let newData = (formData)=>{
    props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return ( <div>
        <h1 className ={s.loginPage}>Login</h1>
         <LoginReduxForm onSubmit={newData}/>
        </div>
        )
}

let mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth
})
const LoginReduxForm = reduxForm({form:'login'})(LoginForm);
export const Login = connect(mapStateToProps, {login})(LoginPage);



