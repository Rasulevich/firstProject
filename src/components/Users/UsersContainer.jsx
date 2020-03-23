import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { followAC, UnfollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followAC(userId));
        },
        unfollow:(userId) => {
            dispatch(UnfollowAC(userId));
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;