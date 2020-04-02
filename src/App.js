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
import HeaderContainer from './components/Header/Header copy';

const App = (props) => {
  

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path = '/dialogs'render= {() => <DialogsContainer store={props.store} dispatch={props.dispatch} />} />
          <Route path ='/profile/:userId?'
          render = {() => <ProfileContainer store={props.store} state={props.state} dispatch={props.dispatch} />  } />
          <Route path ='/users'render = {() => <UsersContainer store={props.store} state={props.state} dispatch={props.dispatch} />  } />
          <Route path ='/news'component={News} />
          <Route path ='/shop'component={Shop} />
          <Route path ='/contacts'component={Contacts} />
          </div>
      </div>
     );
}

export default App;