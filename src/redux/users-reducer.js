const Follow =  'Follow';
const UnFollow =  'UnFollow';

export const followAC = (userId) => ({type: Follow, userId});
export const UnfollowAC = (userId) => ({type: UnFollow, userId});


let initialState =  {
        users:[
        {id:1, photoUrl:'', followed: true, fullName: 'Adam', status: 'Lets go' , location:{city:'Bretsk', country:'Russia'}},
        {id:2, photoUrl:'', followed: false, fullName: 'Idel', status: 'Hash it!' , location:{city:'Ufa', country:'Russia'}},
        {id:3, photoUrl:'', followed: true, fullName: 'Alik', status: 'Ak bars' , location:{city:'Kazan', country:'Russia'}}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow: 
            return {
                ...state, 
                users:state.users.map(u => {
                    if (u.id === action.usersId){
                        return {...u , followed: true}
                    }
                })
            }
        case UnFollow:
            return {
                ...state,
                users:state.users.map(u=>{
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                })
            }
        default:
            return state;
}
}
 export default usersReducer;

