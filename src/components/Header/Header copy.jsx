import React from 'react';
import Header from './Header';
import *as axios from 'axios';
import {SetUserAuth} from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
        .then(Response => {
            if (Response.data.resultCode === 0) {
                let {id,email,login} = Response.data.data;
                this.props.SetUserAuth(id,email,login)
            }
        });
    }

   render(){
        return <Header {...this.props}/>
}
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps, {SetUserAuth}) (HeaderContainer);