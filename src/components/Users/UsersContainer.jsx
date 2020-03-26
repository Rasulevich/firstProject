import React from 'react';
import { connect } from 'react-redux';
import UsersC from './users copy';
import { followAC, UnfollowAC, setUsersAC, setCurrentPageAc } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAc(pageNumber))
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);
export default UsersContainer;