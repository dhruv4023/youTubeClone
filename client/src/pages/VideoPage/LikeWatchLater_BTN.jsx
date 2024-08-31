import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import { MdPlaylistAddCheck } from "react-icons/md";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { addTowatchLater, deletewatchLater } from "../../actions/watchlater";
import { addTolikedVideo, deletelikedVideo } from "../../actions/likedVideo";
import { likeVideo } from "../../actions/video";
import "./BtnsVideoPage.css";

function LikeWatchLater_BTN({ vv, vid }) {
  const currentUser = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const [watchLater, setWatchLater] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const fetchData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      };
      const watchLaterResponse = await axios.get(
        `${process.env.REACT_APP_SERVER}/video/get/watchLater/${currentUser.id}/${vid}`,
        config
      );
      const likedVideoResponse = await axios.get(
        `${process.env.REACT_APP_SERVER}/video/get/likedVideo/${currentUser.id}/${vid}`,
        config
      );
      setWatchLater(watchLaterResponse.data.data != null);
      setLike(likedVideoResponse.data.data != null);
      setLikeCount(likedVideoResponse.data.likeCount);
    } catch (error) {
      console.error("Error fetching watch later or liked videos", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [vid, currentUser]);

  const handleWatchLater = () => {
    if (currentUser !== null) {
      setWatchLater(!watchLater);
      if (watchLater) {
        deletewatchLater({ videoId: vid, Viewer: currentUser.id }, token);
      } else {
        addTowatchLater({ videoId: vid, Viewer: currentUser.id }, token);
      }
      fetchData();
    } else {
      alert("Please login to save video to WatchLater");
    }
  };

  const handleLike = (e, lk) => {
    if (currentUser !== null) {
      setLike(!like);
      setDisLike(false);
      if (like) {
        likeVideo({ id: vid, Like: lk - 1 });
        deletelikedVideo({ videoId: vid, Viewer: currentUser.id }, token);
      } else {
        likeVideo({ id: vid, Like: lk + 1 });
        addTolikedVideo({ videoId: vid, Viewer: currentUser.id }, token);
      }
      fetchData();
    } else {
      alert("Please login to like the video");
    }
  };

  const handleDisLike = (e, lk) => {
    if (currentUser !== null) {
      setDisLike(!disLike);
      if (like) {
        likeVideo({ id: vid, Like: lk - 1 });
        deletelikedVideo({ videoId: vid, Viewer: currentUser.id });
        setLike(false);
      }
    } else {
      alert("Please login to dislike the video");
    }
  };

  return (
    <div className="btns_cont_VidoPageBtn">
      <div className="btn_videoPage">
        <BsThreeDots />
      </div>
      <div className="btn_videoPage" onClick={handleWatchLater}>
        {watchLater ? (
          <>
            <MdPlaylistAddCheck size={22} className="btns_videoPage" />
            <b>Saved</b>
          </>
        ) : (
          <>
            <RiPlayListAddFill size={22} className="btns_videoPage" />
            <b>Save</b>
          </>
        )}
      </div>
      <div className="btn_videoPage">
        <RiHeartAddFill size={22} className="btns_videoPage" />
        <b>Thanks</b>
      </div>
      <div className="btn_videoPage">
        <RiShareForwardLine size={22} className="btns_videoPage" />
        <b>Share</b>
      </div>
      <div className="btn_videoPage" onClick={(e) => handleDisLike(e, vv.Like)}>
        {disLike ? (
          <AiFillDislike size={22} className="btns_videoPage" />
        ) : (
          <AiOutlineDislike size={22} className="btns_videoPage" />
        )}
        <b>DISLIKE</b>
      </div>
      <div className="btn_videoPage" onClick={(e) => handleLike(e, vv.Like)}>
        {like ? (
          <AiFillLike size={22} className="btns_videoPage" />
        ) : (
          <AiOutlineLike size={22} />
        )}
        <b>{likeCount}</b>
      </div>
    </div>
  );
}

export default LikeWatchLater_BTN;
