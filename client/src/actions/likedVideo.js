import * as api from "../api";
export const addTolikedVideo = (likedVideoData) => async (dispatch) => {
  try {
    const { data } = await api.addTolikedVideo(likedVideoData);
    dispatch({ type: "POST_likedVideo", payload: data });
    dispatch(getlikedVideo());
  } catch (error) {
    console.log(error);
  }
};

export const getlikedVideo = () => async (dispatch) => {
  try {
    const { data } = await api.getlikedVideo();
    // console.log(data);
    dispatch({ type: "GET_LIKEDVIDEO", payload: data });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletelikedVideo = (vid) => async (dispatch) => {
  try {
    const { videoId, Viewer } = vid;
    await api.deletelikedVideo(videoId, Viewer);
    dispatch(getlikedVideo());
  } catch (error) {
    console.log(error);
  }
};
