import { addPost, UpdateNewPostText } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import ProfileC from './Profile copy';
import { getProfile, setStatus  } from '../../redux/profile-reducer';
import getStatus from '../../redux/profile-reducer';
import updateStatus from '../../redux/profile-reducer';

let mapStateToProps = (state) => {
  return { 
    newPostText:state.postPage.newPostText,
    profilePage:state.postPage,
    status:state.postPage.status   
}
};


const ProfileContainer = connect(mapStateToProps,{UpdateNewPostText,addPost,getProfile, getStatus, updateStatus, setStatus})(ProfileC);

export default ProfileContainer;