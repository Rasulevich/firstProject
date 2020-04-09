import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { getProfile } from '../../redux/profile-reducer';
import withAuthRedirect from '../hoc/withAuthRedirect';

class ProfileC extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId)
   }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    )
  }
}
let AuthRedirectComponent = withAuthRedirect(ProfileC);
let mapStateToProps = (state) => ({
  profile: state.postPage.profile
})
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlDataContainerComponent);