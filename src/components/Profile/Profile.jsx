import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
    newPostElement.current.value ='';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
  props.updateNewPostText(text);
  }
  return <div className={s.content}>
    <ProfileInfo />
    <div>
      <textarea onChange ={onPostChange} ref={newPostElement} 
      value = {props.newPostText} />
    </div>
    <div>
      <button onClick={addPost}>Add Post </button>
    </div>
    <div>
      <MyPosts postData={props.state.post} />
    </div>
  </div>
}

export default Profile;