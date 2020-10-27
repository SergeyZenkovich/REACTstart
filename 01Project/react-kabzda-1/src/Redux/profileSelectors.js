const getProfile = (state) => {
    return state.profile.profile;
}
const getStatus = (state) => {
    return state.profile.status;
}
const getUserId = (state) => {
    return state.auth.id;
}
const getIsUserAuth = (state) => {
    return state.auth.isAuth;
}

export { getProfile, getStatus, getUserId, getIsUserAuth }