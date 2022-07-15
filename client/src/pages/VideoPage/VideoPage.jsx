import React from "react";
import { useParams } from "react-router-dom";
import "./VideoPage.css";

// import Vid from "../../components/Video/vid.mp4";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../actions/history";

// import { useState } from "react";
import { useEffect } from "react";
import LikeWatchLater_BTN from "./LikeWatchLater_BTN";
import { viewVideo } from "../../actions/video";
import Comment from "../../components/Comments/Comment";
import MoreVideos from "./MoreVideos";
// import moment from "moment";

function VideoPage({ wdt }) {
  const { vid } = useParams();
  const vids = useSelector((state) => state.videoReducer);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);
  // console.log(vid,currentChanel)
  const chanels = useSelector((state) => state.currentUserProfileReducer);
  // console.log(chanels);
  // const currentChanel = chanels.filter((user) => vid === vid?.videoChanel)[0];

  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: currentUser?.result?._id,
      })
    );
  };
  const handleViews = (vw) => {
    // console.log(vw);
    dispatch(
      viewVideo({
        id: vid
      })
    );
  };
  useEffect(() => {
    if (currentUser !== null) {
      handleHistory();
    }
    handleViews();
  }, []);

  // console.log(currentUser);
  // console.log(vid)
  // const vids = [
  //   {
  //     _id: "1",
  //     video_src: Vid,
  //   },
  //   {
  //     _id: "2",
  //     video_src: "vid",
  //   },
  // ];
  const vv = vids?.data.filter((q) => q._id === vid)[0];
  // console.log(vvv)
  return (
    <>
      <div className="container_VideoPage">
        <div
          className="sidebar_on_nonSidebarPage"
          style={{ display: `${wdt.sdbar.display}` }}
        >
          <LeftSidebar wdt={wdt} />
        </div>

        <div className="video_diplay_screen_VideoPage">
          <video
            key={vv._id}
            className="video_ShowVideo_VideoPage"
            // src={vv.video_src}
            src={`http://localhost:5500/${vv.filePath}`}
            controls
          />
          <div className="video_details_VideoPage">
            <div className="video_tittle_like_watchlater_btn">
              <p>{vv.videoTitle}</p>
              <div>
                <p>{vv.Views} views</p>

                <LikeWatchLater_BTN vv={vv} vid={vid} />
              </div>
            </div>
            <div className="chanel_details_videoPage">
              {chanels
                .filter((q) => q._id === vv.videoChanel)
                .map((m) => {
                  return (
                    <>
                      <b className="chanel_logo_videPage" key={m._id}>
                        <p>{m.name.charAt(0).toUpperCase()}</p>
                      </b>
                      <p className="chanel_name_videPage">{m.name}</p>
                    </>
                  );
                })}
            </div>
            <div className="comments_videoPage">
              <h2>
                <u> Comments </u>
              </h2>
              <Comment videoId={vv._id} />
            </div>
          </div>
        </div>
        <div className="moreVideoBAr">
          <MoreVideos cId={vv.videoChanel} currentVid={vid} />
        </div>
      </div>
    </>
  );
}

export default VideoPage;
