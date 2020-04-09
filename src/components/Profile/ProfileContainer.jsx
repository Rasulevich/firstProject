import { addPost, UpdateNewPostText } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import ProfileC from './Profile copy';
import { getProfile } from '../../redux/profile-reducer';


let mapStateToProps = (state) => {
  return { 
    newPostText:state.postPage.newPostText,
    profilePage:state.postPage   
}
};


const ProfileContainer = connect(mapStateToProps,{UpdateNewPostText,addPost,getProfile})(ProfileC);

export default ProfileContainer;