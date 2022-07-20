import React from "react";
import { useSelector } from "react-redux";
import ShowVideo from "../ShowVideo/ShowVideo";
import "./MoreVideo.css";
function MoreVideos({ cId, currentVid }) {
  const vids = useSelector((state) => state.videoReducer);
  // console.log(q._id !== currentVid)
  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Nature",
    "News",
    "Health",
    "JavaScript",
    "Sports",
    "Music",
    "Movies",
    "Comedy",
    "Live",
    "Gming",
    "Animation",
  ];
  return (
    <>
      {" "}
      <div className="navigation_Home">
        {NavList.map((m) => (
          <p className="btn_home_nav">{m}</p>
        ))}
      </div>
      <h3>More Videoes from This Chanel</h3>
      {vids?.data
        ?.filter((q) => q.videoChanel === cId && q._id !== currentVid)
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
