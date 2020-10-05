import Axios from 'axios';

const axiosInstance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "3796a674-8052-4373-ae01-8c81619058d1"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response => response.data));
    },
<<<<<<< HEAD
    getUserProfile(userId) {
        return axiosInstance.get(`profile/${userId}`);
    },
=======
>>>>>>> 524fdc3f80d8d8c40dcadf5a7deea32e559cba43
    followUser(id) {
        return axiosInstance.post(`follow/${id}`, {})
            .then((response => response.data.resultCode));
    },
    unfollowUser(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then((response => response.data.resultCode));
    },
    auth() {
        return axiosInstance.get(`auth/me`)
            .then((response => response.data));
    }
}

export { usersAPI };
