import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.UpdateNewPostText(text);
  }

  return <div className={s.content}>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <div>
      <textarea onChange={onPostChange} ref={newPostElement}km
        value={props.newPostText} />
    </div>
    <div>
      <button onClick={onAddPost}>Add Post </button>
    </div>
    <div>
      <MyPosts posts={props.profilePage.post} />
    </div>
  </div>
}

export default Profile;