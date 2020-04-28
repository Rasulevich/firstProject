import { addPost, UpdateNewPostText } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import ProfileC from './Profile copy';
import { getProfile, setStatus, getStatus  } from '../../redux/profile-reducer';
import updateStatus from '../../redux/profile-reducer';

let mapStateToProps = (state) => {
  return { 
    profilePage:state.postPage,
    status:state.postPage.status,
    authorizedUserId: state.auth.userId,
    isAuth:state.auth.isAuth   
}
};


const ProfileContainer = connect(mapStateToProps,{addPost,getProfile, getStatus, updateStatus, setStatus})(ProfileC);

export default ProfileContainer;