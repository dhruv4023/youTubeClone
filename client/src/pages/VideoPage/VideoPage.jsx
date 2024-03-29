import React from "react";
import { Link, useParams } from "react-router-dom";
import "./VideoPage.css";

// import Vid from "../../components/Video/vid.mp4";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../actions/history";

// import { useState } from "react";
import { useEffect } from "react";
import LikeWatchLater_BTN from "./LikeWatchLater_BTN";
import { viewVideo } from "../../actions/video";
import Comment from "../../components/Comments/Comment";
import MoreVideos from "./MoreVideos";
import moment from "moment";
// import moment from "moment";

function VideoPage() {
  const { vid } = useParams();
  const vids = useSelector((state) => state.videoReducer);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);
  // console.log(vid)
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
        id: vid,
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
        <div className="container_VideoPage2">
          <div className="video_diplay_screen_VideoPage">
            <video
              key={vv._id}
              className="video_ShowVideo_VideoPage"
              // src={vv.video_src}
              src={`${process.env.REACT_APP_SERVER}/${vv.filePath}`}
              // src={`https://youtubeclone4023.herokuapp.com/${vv.filePath}`}
              // src={`http://localhost:5500/${vv.filePath}`}
              controls
              autoPlay
            />
            <div className="video_details_VideoPage">
              <div className="video_tittle_like_watchlater_cont">
                <p className="video_titile_videopage">{vv.videoTitle}</p>
                <div className="videoPage_vies_date_btns">
                  <div className="views_videopage">
                    {vv.Views} views <div className="dot"></div> {moment(vv.createdAt).format("MMM DD, YYYY")}{" "}
                  </div>
                    <LikeWatchLater_BTN vv={vv} vid={vid} />
          
                </div>
              </div>

              < >
                {chanels
                  .filter((q) => q._id === vv.videoChanel)
                  .map((m) => {
                    return (
                      <Link to={`/chanel/${m._id}`} className="chanel_details_videoPage">
                        <b className="chanel_logo_videPage" key={m._id}>
                          <p>{m.name.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className="chanel_name_videPage">{m.name}</p>
                      </Link>
                    );
                  })}
              </>
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
      </div>
    </>
  );
}

export default VideoPage;
