import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  const contacts = props.profile.contacts;
  return (
    <div>
      <div><img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' /></div>
      <div className={s.descriptionBlock}><img src={props.profile.photos.small} /></div>
      <div className={s.nameBlock}> {props.profile.fullName}</div>
      <div>{props.profile.lookingForAJob = true ? props.profile.lookingForAJobDerscription : null}</div>    
      <div>{contacts.facebook}</div>  
      <div>{contacts.vk}</div>
      <div>{contacts.github}</div>
      <div>{contacts.website}</div>
      <div>{contacts.instagram}</div>  
    </div>
  )
}

export default ProfileInfo;