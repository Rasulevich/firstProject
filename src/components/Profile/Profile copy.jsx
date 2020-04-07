import React from 'react';
import *as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { getProfile } from '../../redux/profile-reducer';


class ProfileC extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId)
    //usersAPI.getProfile(userId)
  //     .then(Response => {
  //       this.props.setUserProfile(Response.data)
  //     });
   }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.postPage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileC)
export default connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlDataContainerComponent);