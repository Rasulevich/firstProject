import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../redux/state';
import { connect } from 'react-redux';
import ProfileC from './Profile copy';
import { getProfile } from '../../redux/profile-reducer';


let mapStateToProps = (state) => {
  return { 
    newPostText:state.postPage.newPostText,
    profilePage:state.postPage   
}
};

let mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewPostText: (text) => {
      dispatch (UpdateNewPostTextActionCreator(text));
    },
    addPost:() => {
      dispatch (addPostActionCreator());
    },
    getProfile:() => {
      dispatch (getProfile());
    }
  }
};
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileC);

export default ProfileContainer;