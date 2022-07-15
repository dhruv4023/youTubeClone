import * as api from "../api";

export const uploadVideo = (videoData) => async (dispatch) => {
  try {
    // console.log(videoData);
    const { formData, singleFileOptions } = videoData;
    const { data } = await api.uploadVideo(formData, singleFileOptions);
    dispatch({ type: "POST_VIDEO", data });
    dispatch(getVideos());
  } catch (error) {
    // console.log(error.response.data);
    alert(error.response.data.message);
  }
};

export const getVideos = () => async (dispatch) => {
  try {
    const { data } = await api.getVideos();
    // console.log(data)
    dispatch({ type: "FETCH_ALL_VIDEOS", payload: data });
    // return data;
  } catch (error) {
    throw error;
  }
};

export const likeVideo = (LikeData) => async (dispatch) => {
  try {
      const { id, Like } = LikeData;
      // console.log(Like)
      const { data } = await api.likeVideo(id, Like);
      dispatch({ type: 'POST_LIKE', payload: data })
      dispatch(getVideos())
  } catch (error) {
      console.log(error)
  }
}
export const viewVideo = (ViewData) => async (dispatch) => {
  try {
      const { id, Views } = ViewData;
      // console.log(Views)
      const { data } = await api.viewVideo(id, Views);
      dispatch({ type: 'POST_VIEW', payload: data })
      dispatch(getVideos())
  } catch (error) {
      console.log(error)
  }
}


// getHistory()