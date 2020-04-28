export const giveUsers = (state) => {
    return state.userPage.users
}

export const getPagesize = (state) => {
    return state.userPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.userPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.userPage.currentPage
}

export const getIsFethcing = (state) => {
    return state.userPage.isFetching
}