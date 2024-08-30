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

export const addToHistory = (historyData) => API.post(`/video/history`, historyData)
export const getHistory = () => API.get('/video/getHistory');
export const deleteHistory = (userId) => API.delete(`/video/clearhistory/${userId}`)

export const addTowatchLater = (watchLaterData) => API.post(`/video/watchLater`, watchLaterData)
export const getwatchLater = () => API.get('/video/getwatchLater');
export const deletewatchLater = (videoId, Viewer) => API.delete(`/video/deletewatchLater/${videoId}/${Viewer}`)

export const addTolikedVideo = (likedVideoData) => API.post(`/video/likedVideo`, likedVideoData)
export const getlikedVideo = () => API.get('/video/getlikedVideo');
export const deletelikedVideo = (videoId, Viewer) => API.delete(`/video/deletelikedVideo/${videoId}/${Viewer}`)

export const postComment = (CommentData) => API.post(`/comments/post`, CommentData)
export const deleteComment = (id) => API.delete(`/comments/delete/${id}`)
export const editComment = (id, commentBody) => API.patch(`/comments/edit/${id}`, { commentBody })
export const getAllcomments = () => API.get('/comments/get');