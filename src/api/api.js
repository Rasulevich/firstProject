import *as axios from 'axios';



const instance = axios.create({
    withCredentials:true,
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

export const profileAPI = {
    getStatus (userId){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId)
    },
    updateStatus (status) {
        return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true })
            .then(Response => {
                return Response.data;
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}