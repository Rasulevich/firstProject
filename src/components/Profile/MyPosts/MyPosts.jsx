import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  
  let postElement = props.postData.map(p => <Post message={p.message} />) ;
  return (
    <div>
      <div className={s.PostBlock}>
        <h2>My posts</h2>
      </div>
      <div className={s.posts}>
        {postElement}
        </div>
    </div>
  )
}
export default MyPosts;