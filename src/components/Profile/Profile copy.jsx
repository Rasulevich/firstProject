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
      userId = this.props.authorizedUserId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
   }

  render() 
  {
    return (
      <>
        <Profile {...this.props} 
                 profile={this.props.profile} 
                 status={this.props.status} 
                 updateStatus={this.props.updateStatus}/>
      </>
    )
  }
}

let mapStateToProps = (state) => ({
    profile: state.postPage.profile,
    status:state.postPage.status,
    isAuth:state.auth.isAuth
})
export default compose(
  connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus, setStatus }),
  withRouter,
  //withAuthRedirect
 )(ProfileC);
