import axios from "axios";
import * as api from "../api";
import { setVideos } from "../state";

export const uploadVideo = (videoData) => async (dispatch) => {
  try {
    // console.log(videoData);
    const { formData, singleFileOptions } = videoData;
    // console.log(formData)
    const { data } = await api.uploadVideo(formData, singleFileOptions);
    dispatch({ type: "POST_VIDEO", data });
    dispatch(getAllVideos());
  } catch (error) {
    // console.log(error.response.data);
    alert(error.response.data.message);
  }
};

export const getAllVideos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/video/getall`, {
      headers: { "Content-Type": "application/json" }
    });
    
    const { data } = response;
    
    // Optionally validate the data here
    // e.g., if (!Array.isArray(data)) throw new Error('Invalid data format');

    console.log(data);
    dispatch(setVideos({ videos: data }));
  } catch (error) {
    console.error('Failed to fetch videos:', error);
  }
};

export const likeVideo = (LikeData) => async (dispatch) => {
  try {
    const { id, Like } = LikeData;
    // console.log(Like)
    const { data } = await api.likeVideo(id, Like);
    dispatch({ type: 'POST_LIKE', payload: data })
    dispatch(getAllVideos())
  } catch (error) {
    console.log(error)
  }
}
export const viewVideo = (ViewData) => async (dispatch) => {
  try {
    const { id } = ViewData;
    // console.log(Views)
    const { data } = await api.viewVideo(id);
    dispatch({ type: 'POST_VIEW', payload: data })
    dispatch(getAllVideos())
  } catch (error) {
    console.log(error)
  }
}


// getHistory()