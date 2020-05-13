import React from 'react';
import styles from './users.module.css'
import userPhoto from '../../images/users.jpg';
import { NavLink } from 'react-router-dom';


let User = ({ user, follow, unfollow }) => {
    return (
        <div>
            <span>
                <div><NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.photo} />
                </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            unfollow(user.id)
                        }}> UnFollow</button>
                        : <button onClick={() => {
                            follow(user.id)
                        }}> Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>)
}
export default User;