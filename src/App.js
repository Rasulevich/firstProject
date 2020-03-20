import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from "react-router-dom";
import News from './components/News/News';
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path = '/dialogs'render= {() => <DialogsContainer store={props.store} dispatch={props.dispatch} />} />
          <Route path ='/profile'render = {() => <ProfileContainer store={props.store} state={props.state} dispatch={props.dispatch} />  } />
          <Route path ='/users'render = {() => <UsersContainer store={props.store} state={props.state} dispatch={props.dispatch} />  } />
          <Route path ='/news'component={News} />
          <Route path ='/shop'component={Shop} />
          <Route path ='/contacts'component={Contacts} />
          </div>
      </div>
     );
}

export default App;