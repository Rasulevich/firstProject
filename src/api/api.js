import *as axios from 'axios';



const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers : {
        'API-KEY':'82cffa2e-9f28-41f5-a762-41533df9418b'
    }
});

export const usersAPI = { 
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile(userId) {
       return instance.get(`profile/`+ userId)
    },
    unfollow (userId) {
       return instance.delete(`follow/${userId}`)
    },
    follow (userId) {
        return instance.post(`follow/${userId}`, {})
    },
    getContactApi(currentPage = 1,pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export const profileAPI = {
    getStatus (userId){
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`/profile/status`, {status:status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,{
            withCredentials:true })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}