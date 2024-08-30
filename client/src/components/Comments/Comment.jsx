import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayComments from "./DisplayComments.jsx";
import { postComment } from "../../actions/comments";
import axios from "axios";

import "./comment.css";

export default function Comment({ videoId }) {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/comments/get/${videoId}`
      );
      console.log(response.data);
      setCommentsList(response.data);
    } catch (err) {
      setError("Failed to load comments");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const checkAuth = () => {
    if (!currentUser) {
      alert("Login or signup to post your comments");
      return false;
    }
    return true;
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!checkAuth()) return;

    if (!comment) {
      alert("Please type your comment");
    } else {
      await postComment(
        {
          videoId: videoId,
          userId: currentUser.id,
          commentBody: comment,
          userCommented: currentUser.name,
        },
        token
      );
      fetchComments()
      setComment("");
    }
  };

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <form onSubmit={handleSubmitComment} className="commentSubForm">
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          className="commentIBox"
          value={comment}
          disabled={!currentUser}
        />
        <input
          type="submit"
          disabled={!currentUser}
          className="commentAddBtn"
          value="Add"
        />
      </form>
      <div className="displayComment_commentsPage">
        {commentsList
          .slice()
          .reverse()
          .map((m) => (
            <DisplayComments
            fetchComments={fetchComments}
              key={m._id}
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
