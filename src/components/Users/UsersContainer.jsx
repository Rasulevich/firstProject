import { connect } from 'react-redux';
import UsersC from './users copy';
import { followAC, UnfollowAC, setUsersAC, setCurrentPageAc, 
setTotalUsersCountAC, toogleIsFetchingAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching:state.userPage.isFetching
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
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toogleIsFetching: (isFetching) => {
            dispatch(toogleIsFetchingAC(isFetching))
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC);
export default UsersContainer;