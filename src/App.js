import React from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.css';
import ContactsContainer from './components/Contacts/Contacts copy';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Shop from './components/Shop/Shop';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/Header container';
import { Login } from './components/Login/login';
import { Component } from 'react';
import {initializeAPP} from './redux/app-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/preloader';

class App extends Component {
     componentDidMount(){
      this.props.initializeAPP();
    }

    render () {
      if (!this.props.initialized){
        return <Preloader/>
      }
      return (
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Route path = '/dialogs'render= {() => <DialogsContainer  />} />
              <Route path ='/profile/:userId?'
              render = {() => <ProfileContainer/>} />
              <Route path ='/users'render = {() => <UsersContainer  />} />
              <Route path ='/news'component={News} />
              <Route path ='/login'render = {() => <Login />} />
              <Route path ='/shop'component={Shop} />
              <Route path ='/contacts'render = {() => <ContactsContainer />} />
              </div>
          </div>
        );
    }
  }

 const mapStateToProps = (state) => ({
    initialized:state.app.initialized
 })  
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeAPP})) (App);