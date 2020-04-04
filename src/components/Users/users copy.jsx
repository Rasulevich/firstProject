import React from 'react';
import *as axios from 'axios';
import Users from './users';
import Preloader from '../common/preloader/preloader';

class UsersC extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`,{
          //  withCredentials:true
        })
        .then(Response => {
        this.props.setUsers(Response.data.items)
        this.props.setTotalUsersCount(Response.data.totalCount)
        
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`,{
            //withCredentials:true
        })
        .then(Response => {
        this.props.toogleIsFetching(false);
        this.props.setUsers(Response.data.items);
        });
    }
    render() {
        return (
            <>
            {this.props.isFetching ?<Preloader/> : null}
                <Users 
                currentPage = {this.props.currentPage}
                users = {this.props.users}
                pageSize = {this.props.pageSize}
                totalUsersCount = {this.props.totalUsersCount}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                onPageChanged = {this.onPageChanged}
                />
            </>
        )
    }
}
export default UsersC;