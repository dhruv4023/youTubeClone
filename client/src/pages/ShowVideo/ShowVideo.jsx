import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ShowVideo.css";

function ShowVideo({ vid }) {
  const chanels = useSelector((state) => state?.currentUserProfileReducer);
  // console.log(chanels);

  const currentChanel = chanels?.filter((c) => c?._id === vid?.videoChanel)[0];
  // console.log(vid, currentChanel, vid.videoChanel);
  // console.log(vid)
  return (
         <>
          <Link to={`/VideoPage/${vid._id}`}>
            <video
              src={`http://localhost:5500/${vid.filePath}`}
              className="video_ShowVideo"
            ></video>
          </Link>
          <div className="video_description">
            <div className="chanel_logo">
              {currentChanel ? (
                <>
                  <Link to={`/chanel/${vid.videoChanel}`} className="chanel_logo">
                    <p>{currentChanel?.name?.charAt(0).toUpperCase()}</p>
                  </Link>
                </>
              ) : (
                <>
                  <div className="chanel_logo">
                    <p></p>
                  </div>
                </>
              )}
            </div>
            <div className="video_details">
              <p>{vid.videoTitle}</p>
            </div>
          </div>
        </>
  );
}

export default ShowVideo;
