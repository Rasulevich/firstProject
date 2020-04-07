import React from 'react';
import Users from './users';
import Preloader from '../common/preloader/preloader';

class UsersC extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
        // this.props.toogleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        // .then(data => {
        // this.props.toogleIsFetching(false);
        // this.props.setUsers(data.items);
        // });
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