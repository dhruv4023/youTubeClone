import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayComments from "./DisplayComments.jsx";

// import { useParams } from "react-router-dom";
import { postComment } from "../../actions/comments";

import "./comment.css";

export default function Comment({ videoId }) {
  const [comment, setComment] = useState("");
  const User = useSelector((state) => state.currentUserReducer);
  const commentsList = useSelector((state) => state.commentReducer);

  console.log(commentsList);

  const checkAuth = () => {
    if (User === null) {
      alert("login or signup to post Your Comments");
    }
  };

  const dispatch = useDispatch();

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("type your comment");
    } else {
      dispatch(
        postComment({
          videoId: videoId,
          userId: User?.result?._id,
          commentBody: comment,
          userCommented: User?.result.name,
        })
      );
      setComment("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitComment} className="commentSubForm">
        <input
          type="text"
          placeholder="add Comment... "
          onChange={(e) => setComment(e.target.value)}
          className="commentIBox"
          value={comment}
          onClick={checkAuth}
        />
        <input type="submit" className="commentAddBtn" value="add" />
      </form>
      <div className="displayComment_commentsPage">
        {commentsList?.data
          ?.filter((q) => videoId === q?.videoId)
          .map((m) => (
            // console.log(m)
            <DisplayComments
              cmtId={m._id}
              userId={m.userId}
              cmtBody={m.commentBody}
              cmtOn={m.commentOn}
              usercmt={m.userCommented}
            />
          ))}
      </div>
    </>
  );
}
/*
cmtId={m._id}
cmtBody={m.commentBody}
cmtOn={m.commentOn}
usercmt={m.userCommented}
*/
