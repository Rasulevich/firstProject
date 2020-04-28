import React from 'react';
import userPhoto from '../../images/users.jpg';
import styles from '../Users/users.module.css'


const Contacts = (props) => {
  debugger
  return (
   <div>
      Friends
        {props.contact.map(u => <div key={u.id}>
           <div>
           {u.followed ? 
            <span>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
            {u.status}
            {u.name}
            </span> : null}
            </div>
        </div>)}
    </div>
  )
}


export default Contacts;