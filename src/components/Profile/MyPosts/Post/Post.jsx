import React from 'react';
import s from './Post.module.css';
export const avatar = 'https://avatars.mds.yandex.net/get-pdb/2380153/0e1c935d-ed42-4c9f-b101-d790b95d737c/s1200'
const Post = (props) => {
  return <div>
    <div className={s.item}>
      <img src = {avatar}/>
       {props.message}
          <div>  
          <span>like</span>
      </div>
    </div>
  </div>
}
export default Post;