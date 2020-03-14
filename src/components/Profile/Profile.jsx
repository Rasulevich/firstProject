import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../redux/state';

const Profile = (props) => {

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch (addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch (UpdateNewPostTextActionCreator(text));
  }

  return <div className={s.content}>
    <ProfileInfo />
    <div>
      <textarea onChange={onPostChange} ref={newPostElement}
        value={props.newPostText} />
    </div>
    <div>
      <button onClick={addPost}>Add Post </button>
    </div>
    <div>
      <MyPosts posts={props.profilePage.post} />
    </div>
  </div>
}

export default Profile;