import React from 'react';
import Header from './Header';
import {GetUserAuth} from '../../redux/auth-reducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.GetUserAuth()
    }

    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps, {GetUserAuth}) (HeaderContainer);