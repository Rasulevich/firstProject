import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';


class ProfileC extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1079;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
   }

  render() 
  {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.postPage.profile
})
export default compose(
  connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus, setStatus }),
  withRouter,
 // withAuthRedirect
)(ProfileC);
