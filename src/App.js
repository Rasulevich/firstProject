import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from "react-router-dom";
import News from './components/News/News';
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';

const App = (props) => {
  

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path = '/dialogs'render= {() => <Dialogs dispatch={props.dispatch} state={props.state.dialogPage} 
           newMessage ={props.state.dialogPage.newMessage}/>} />
          <Route path ='/profile'render = {() => <Profile dispatch={props.dispatch} profilePage={props.state.postPage} />  } />
          <Route path ='/news'component={News} />
          <Route path ='/shop'component={Shop} />
          <Route path ='/contacts'component={Contacts} />
          </div>
      </div>
     );
}

export default App;