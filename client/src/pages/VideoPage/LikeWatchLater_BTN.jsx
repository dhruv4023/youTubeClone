import React from "react";
import {
  RiHeartAddFill,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import { MdPlaylistAddCheck } from "react-icons/md";

import { addTowatchLater, deletewatchLater } from "../../actions/watchlater";
import { likeVideo } from "../../actions/video";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./BtnsVideoPage.css";
import { addTolikedVideo, deletelikedVideo } from "../../actions/likedVideo";
import { BsThreeDots } from "react-icons/bs";
function LikeWatchLater_BTN({ vv, vid }) {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUserReducer);

  const watchLaterList = useSelector((state) => state.watchLaterReducer);
  const likedVideoList = useSelector((state) => state.likedVideoReducer);

  // console.log(likedVideoList);
  // const handleDeleteWatchLater=(id)=>{
  // }
  const [watchLater, setWatchLater] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);

  useEffect(() => {
    watchLaterList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === currentUser?.result._id
      )
      .map((m) => setWatchLater(true));
    likedVideoList?.data
      .filter(
        (q) => q?.videoId === vid && q?.Viewer === currentUser?.result._id
      )
      .map((m) => setLike(true));
  }, []);

  const handleWatchLater = () => {
    if (currentUser !== null) {
      if (watchLater) {
        setWatchLater(false);
        console.log("s");
        dispatch(
          deletewatchLater({ videoId: vid, Viewer: currentUser?.result._id })
        );
      } else {
        setWatchLater(true);
        dispatch(
          addTowatchLater({
            videoId: vid,
            Viewer: currentUser?.result?._id,
          })
        );
      }
    } else {
      alert("Plz Login to Save Video To WatchLater");
    }
  };

  const handleLike = (e, lk) => {
    if (currentUser !== null) {
      if (like) {
        setLike(false);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
        dispatch(
          deletelikedVideo({ videoId: vid, Viewer: currentUser?.result._id })
        );
      } else {
        setLike(true);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk + 1,
          })
        );
        dispatch(
          addTolikedVideo({
            videoId: vid,
            Viewer: currentUser?.result?._id,
          })
        );
      }
      setDisLike(false);
    } else {
      alert("Plz Login to Like The Video");
    }
  };

  const handleDisLike = (e, lk) => {
    if (currentUser !== null) {
      if (disLike) setDisLike(false);
      else setDisLike(true);
      if (like) {
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
      }
      dispatch(
        deletelikedVideo({ videoId: vid, Viewer: currentUser?.result._id })
      );
      setLike(false);
    } else {
      alert("Plz Login to DisLike The Video");
    }
  };

  return (
    <div className="btns_cont_VidoPageBtn">
      <div className="btn_videoPage">
        <BsThreeDots />
      </div>
      <div className="btn_videoPage">
        <div className="like_videopage" onClick={handleWatchLater}>
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
      </div>
      <div className="btn_videoPage">
        <div className="like_videopage">
          {watchLater ? (
            <>
              <RiHeartAddFill size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <RiHeartAddFill size={22} className="btns_videoPage" />
            </>
          )}
          <b>Thanks</b>
        </div>
      </div>
      <div className="btn_videoPage">
        <div className="like_videopage">
          {watchLater ? (
            <>
              <RiShareForwardLine size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <RiShareForwardLine size={22} className="btns_videoPage" />
            </>
          )}
          <b>Share</b>
        </div>
      </div>
      <div className="btn_videoPage">
        <div
          className="like_videopage"
          onClick={(e) => handleDisLike(e, vv.Like)}
        >
          {disLike ? (
            <>
              <AiFillDislike size={22} className="btns_videoPage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videoPage" />
            </>
          )}
          <b>DISLIKE</b>
        </div>
      </div>

      <div className="btn_videoPage">
        <div className="like_videopage">
          {like ? (
            <>
              <AiFillLike
                onClick={(e) => handleLike(e, vv.Like)}
                size={22}
                className="btns_videoPage"
              />
            </>
          ) : (
            <>
              <AiOutlineLike
                onClick={(e) => handleLike(e, vv.Like)}
                size={22}
              />
            </>
          )}
          <b>{vv.Like}</b>
          {/* {console.log(vv.Like)} */}
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLater_BTN;
