import React from 'react';
import *as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileC extends React.Component {

  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(Response => {
        debugger;
        this.props.setUserProfile(Response.data)
      });
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
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);