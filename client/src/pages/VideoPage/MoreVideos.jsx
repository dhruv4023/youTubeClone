import React from "react";
import { useSelector } from "react-redux";
import ShowVideo from "../ShowVideo/ShowVideo";
import "./MoreVideo.css";
function MoreVideos({ cId, currentVid }) {
  const vids = useSelector((state) => state.videos);
  
  return (
    <>
      <h3>More Videoes from This Chanel</h3>
      {vids
        .filter((q) => q.videoChanel._id === cId && q._id !== currentVid)
        .map((vi) => {
          return (
            <div className="video_box MoreVideo_VideoPage_video_list">
              <ShowVideo vid={vi} />
            </div>
          );
        })}
    </>
  );
}

export default MoreVideos;
