import { connect } from 'react-redux';
import UsersC from './users copy';
import { follow, unfollow, setUsers, setCurrentPage, 
setTotalUsersCount, toogleIsFetching, getUsers } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching:state.userPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,
    setTotalUsersCount,toogleIsFetching, getUsers})(UsersC);
export default UsersContainer;