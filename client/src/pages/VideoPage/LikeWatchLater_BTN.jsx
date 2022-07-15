import React from "react";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";

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
import { addTolikedVideo, deletelikedVideo } from "../../actions/likedVideo";
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
        console.log("s")
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
        dispatch(deletelikedVideo({ videoId: vid, Viewer: currentUser?.result._id }));
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
      dispatch(deletelikedVideo({ videoId: vid, Viewer: currentUser?.result._id }));
      setLike(false);
    } else {
      alert("Plz Login to DisLike The Video");
    }
  };

  return (
    <b>
      <div className="btn_videoPage">
        <div className="like_videopage">
          {like ? (
            <>
              <AiFillLike onClick={(e) => handleLike(e, vv.Like)} size={30} />
            </>
          ) : (
            <>
              <AiOutlineLike
                onClick={(e) => handleLike(e, vv.Like)}
                size={30}
              />
            </>
          )}
          <b>{vv.Like}</b>
          {/* {console.log(vv.Like)} */}
        </div>
      </div>
      <div className="btn_videoPage">
        <div
          className="like_videopage"
          onClick={(e) => handleDisLike(e, vv.Like)}
        >
          {disLike ? (
            <>
              <AiFillDislike size={30} />
            </>
          ) : (
            <>
              <AiOutlineDislike size={30} />
            </>
          )}
          <b>DISLIKE</b>
        </div>
      </div>
      <div className="btn_videoPage">
        <div className="like_videopage" onClick={handleWatchLater}>
          {watchLater ? (
            <>
              <MdWatchLater size={30} />
            </>
          ) : (
            <>
              <MdOutlineWatchLater size={30} />
            </>
          )}
          <b>WatchLater</b>
        </div>
      </div>
    </b>
  );
}

export default LikeWatchLater_BTN;
