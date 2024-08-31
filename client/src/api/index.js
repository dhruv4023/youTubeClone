import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_SERVER}` })
// const API = axios.create({ baseURL: 'https://youtubeclone4023.herokuapp.com' })
// const API = axios.create({ baseURL: 'http://localhost:5500' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updateUserData = (id, updateData) => API.patch(`/user/update/${id}`, updateData);

export const uploadVideo = (data, options) => API.post('/video/uploadvideo', data, options);
export const getVideos = () => API.get('/video/get/all');
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });
export const viewVideo = (id) => API.patch(`/video/view/${id}`);

