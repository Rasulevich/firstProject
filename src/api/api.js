import *as axios from 'axios';



const instance = axios.create({
    // withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        'API-KEY':''
    }
});

export const usersAPI = { 
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (Response => {
                return Response.data;
        });
    },
    getProfile(userId) {
       return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
    },
    getLogin(){
       return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true })
            .then(Response => {
                return Response.data;
            })
    },
    unfollow (userId) {
       return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{
            withCredentials:true,
            //header:'API-KEY':
        })
    },
    follow (userId) {
        return   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},{
            withCredentials:true,
            //header:'API-KEY':
        })
    }
}

        