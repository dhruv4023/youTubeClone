import React, { useState } from "react";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import "./comment.css";

import { editComment, deleteComment } from "../../actions/comments";

export default function DisplayComments({
  cmtId,
  cmtBody,
  cmtOn,
  userId,
  usercmt,
  fetchComments,
}) {
  const User = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const [edit, setEdit] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");
  const [commentId, setCommentId] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleEdit = (ctId, ctbdy) => {
    setEdit(true);
    setCommentId(ctId);
    setCommentEdit(ctbdy);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!commentEdit) {
      alert("Type your comment");
    } else {
      setLoading(true); // Start loading
      await editComment(
        {
          id: commentId,
          commentBody: commentEdit,
        },
        token
      );
      setCommentEdit("");
      setLoading(false); // Stop loading
    }
    setEdit(false);
    fetchComments();
  };

  const handleDel = async (id) => {
    setLoading(true); // Start loading
    await deleteComment(id, token);
    setLoading(false); // Stop loading
    fetchComments();
  };

  return (
    <>
      {loading ? ( // Show loading indicator
        <p>Loading...</p>
      ) : (
        <>
          {edit === false ? (
            <p className="commentBdy">{cmtBody}</p>
          ) : (
            <form className="commentSubForm" onSubmit={handleSubmitComment}>
              <input
                type="text"
                placeholder="Add Comment... "
                value={commentEdit}
                onChange={(e) => setCommentEdit(e.target.value)}
                className="commentIBox"
              />
              <input type="submit" className="commentAddBtn" value="Save" />
            </form>
          )}
          <p className="userCommented">
            - {usercmt} commented {moment(cmtOn).fromNow()}
          </p>
          {User.id === userId && (
            <p className="EditDel">
              <i onClick={() => handleEdit(cmtId, cmtBody)}>Edit</i>{" "}
              <i onClick={() => handleDel(cmtId)}>Delete</i>
            </p>
          )}
        </>
      )}
    </>
  );
}
