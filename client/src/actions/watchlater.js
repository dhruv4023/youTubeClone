import axios from "axios";

// import * as api from "../api";
export const addTowatchLater = async(watchLaterData,token)  => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.post(`${process.env.REACT_APP_SERVER}/video/watchLater`,watchLaterData,config)
  } catch (error) {
    console.log(error);
  }
};


export const deletewatchLater = async(vid,token)  => {
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
