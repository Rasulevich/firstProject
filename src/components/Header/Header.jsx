import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { avatar } from '../Profile/MyPosts/Post/Post';

const Header = (props) => {
    
    return <header className={s.header}>
              <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>     
              <div className = {s.loginBlock}>
                 <img src ={avatar}/> 
                    { props.isAuth ? props.login
                     :<NavLink to = {'/login'}>Login</NavLink>}
               </div>
           </header>
};

export default Header;