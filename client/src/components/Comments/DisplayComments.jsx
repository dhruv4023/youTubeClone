import React, { useState } from "react";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import "./comment.css";

import { editComment, deleteComment } from "../../actions/comments";

export default function DisplayComments({ cmtId, cmtBody, cmtOn, userId,usercmt }) {
  const User = useSelector((state) => state.currentUserReducer);

  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");
  const [commentId, setCommentId] = useState("");

  const dispatch = useDispatch();
  const handleEdit = (ctId, ctbdy) => {
    setEdit(true);
    setCommentId(ctId);
    setCommentEdit(ctbdy);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentEdit) {
      alert("type your comment");
    } else {
      dispatch(
        editComment({
          id: commentId,
          commentBody: commentEdit,
        })
      );
      setCommentEdit("");
    }
    setEdit(false);
  };

  const handleDel = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <>
      {edit === false ? (
        <p className="commentBdy">{cmtBody}</p>
      ) : (
        <form className="commentSubForm" onSubmit={handleSubmitComment}>
          <input
            type="text"
            placeholder="add Comment... "
            value={commentEdit}
            onChange={(e) => setCommentEdit(e.target.value)}
            className="commentIBox"
          />
          <input type="submit" className="commentAddBtn" value="save" />
        </form>
      )}
      <p className="userCommented">
        - {usercmt} commented {moment(cmtOn).fromNow()}
      </p>
      {User?.result?._id === userId && (
        <p className="EditDel">
          <i onClick={() => handleEdit(cmtId, cmtBody)}>Edit</i>{" "}
          <i onClick={() => handleDel(cmtId)}>delete</i>
        </p>
      )}
    </>
  );
}
