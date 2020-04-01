import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../redux/state';
import { connect } from 'react-redux';
import ProfileC from './Profile copy';


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
    }
  }
};
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileC);

export default ProfileContainer;