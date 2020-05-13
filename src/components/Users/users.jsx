import React from 'react';
import Paginator from './Paginator';
import User from './User';


let Users = ({currentPage,onPageChanged, totalUsersCount, pageSize, ...props}) => {
    
    return (
        <div>
        <Paginator  currentPage={currentPage} 
                    onPageChanged={onPageChanged} 
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}/>
            {
                props.users.map(u => <User  user={u}
                                            unfollow={props.unfollow}
                                            follow={props.follow}
                                            key={u.id} />)
            }
        </div >)

}
export default Users;