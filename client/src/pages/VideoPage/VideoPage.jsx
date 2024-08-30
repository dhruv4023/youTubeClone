import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./VideoPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../actions/history";
import { viewVideo } from "../../actions/video";
import LikeWatchLater_BTN from "./LikeWatchLater_BTN";
import Comment from "../../components/Comments/Comment";
import MoreVideos from "./MoreVideos";
import moment from "moment";
import axios from "axios";

function VideoPage() {
  const { vid } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/video/get/${vid}`
        );
        // console.log(response.data);
        setVideo(response.data);
      } catch (error) {
        console.error("Failed to fetch video data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();

    if (currentUser !== null) {
      dispatch(addToHistory({ videoId: vid, Viewer: currentUser.id }));
    }
    dispatch(viewVideo({ id: vid }));
  }, [vid, dispatch, currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {video ? (
        <div className="container_VideoPage">
          <div className="container_VideoPage2">
            <div className="video_diplay_screen_VideoPage">
              <video
                className="video_ShowVideo_VideoPage"
                src={`${process.env.REACT_APP_SERVER}/${video.filePath}`}
                controls
                autoPlay
              />
              <div className="video_details_VideoPage">
                <div className="video_tittle_like_watchlater_cont">
                  <p className="video_titile_videopage">{video.videoTitle}</p>
                  <div className="videoPage_vies_date_btns">
                    <div className="views_videopage">
                      {video.Views} views <div className="dot"></div>{" "}
                      {moment(video.createdAt).format("MMM DD, YYYY")}
                    </div>
                    <LikeWatchLater_BTN vv={video} vid={vid} />
                  </div>
                </div>
                <Link
                  to={`/chanel/${video.videoChanel._id}`}
                  className="chanel_details_videoPage"
                >
                  <b className="chanel_logo_videPage">
                    <p>{video.videoChanel.name.charAt(0).toUpperCase()}</p>
                  </b>
                  <p className="chanel_name_videPage">
                    {video.videoChanel.name}
                  </p>
                </Link>

                <div className="comments_videoPage">
                  <h2>
                    <u>Comments</u>
                  </h2>
                  <Comment videoId={vid} />
                </div>
              </div>
            </div>
            <div className="moreVideoBAr">
              <MoreVideos cId={video.videoChanel._id} currentVid={vid} />
            </div>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

export default VideoPage;
