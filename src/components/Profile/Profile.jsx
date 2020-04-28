import React, { memo } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../utils/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const Profile = React.memo(props => {
  
  let addNewPost = (value) => {
    props.addPost(value.postText);
  }
  
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <PostReduxForm onSubmit={addNewPost}/>
      <div>
        <MyPosts posts={props.profilePage.post} />
      </div>
    </div>
  )
});

const maxLength10 = maxLengthCreator(10)
const PostChange = (props)=>{
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"postText"} validate={[required , maxLength10]}/> 
      </div>
      <div>
      <button>Add Post </button>
    </div>
    </form>
  )
}

const PostReduxForm = reduxForm({form:'postTextForm'})(PostChange)

export default Profile;