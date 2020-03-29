import React from 'react';
import styles from './users.module.css'
import *as axios from 'axios';
import userPhoto from '../../images/users.jpg';
import Users from './users';

class UsersC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(Response => {
        this.props.setUsers(Response.data.items)
        this.props.setTotalUsersCount(Response.data.totalCount)
        
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`)
        .then(Response => {
        this.props.setUsers(Response.data.items)
        });
    }
    render() {
        return (
            <>
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