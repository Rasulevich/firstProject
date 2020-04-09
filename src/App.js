import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Contacts from './components/Contacts/Contacts';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Shop from './components/Shop/Shop';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/Header container';
import { LoginPage } from './components/Login/login';

const App = (props) => {
  

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
          <Route path ='/login'render = {() => <LoginPage />} />
          <Route path ='/shop'component={Shop} />
          <Route path ='/contacts'component={Contacts} />
          </div>
      </div>
     );
}

export default App;