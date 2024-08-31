import axios from "axios";

export const addTolikedVideo = async (likedVideoData, token) => {
  try {

    const config = {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.post(`${process.env.REACT_APP_SERVER}/video/likedVideo`, likedVideoData, config)
  } catch (error) {
    console.log(error);
  }
};


export const deletelikedVideo = async (vid, token) => {
  try {
    const { videoId, Viewer } = vid;

    const config = {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.delete(`${process.env.REACT_APP_SERVER}/deletelikedVideo/${videoId}/${Viewer}`, config)
  } catch (error) {
    console.log(error);
  }
};
