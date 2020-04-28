import { connect } from 'react-redux';
import UsersC from './users copy';
import { follow, unfollow, setUsers, setCurrentPage, 
setTotalUsersCount, toogleIsFetching, getUsers } from '../../redux/users-reducer';
import { giveUsers, getPagesize, getTotalUsersCount, 
    getCurrentPage, getIsFethcing } from '../../redux/users-selectors';

let mapStateToProps = (state) => {
    return {
        users:giveUsers(state),
        pageSize:getPagesize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFethcing(state)
    }
}


const UsersContainer = connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,
    setTotalUsersCount,toogleIsFetching, getUsers})(UsersC);
export default UsersContainer;