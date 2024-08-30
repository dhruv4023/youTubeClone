import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../actions/user";
import "./editChanel.css";
import "../Auth/loginSignupPageStyle.css";

function EditChanelUserData({ setEditChanel }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  
  // Initialize state with fallback values
  const [name, setName] = useState(currentUser?.user?.name || "");
  const [desc, setDesc] = useState(currentUser?.user?.desc || "");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    if (!name) {
      alert("Enter Name!");
    } else if (!desc) {
      alert("Enter Chanel Description!");
    } else {
      // Dispatch the action to update user data
      dispatch(updateUserData(currentUser?.user?.id, { name, desc }))
        .then(() => {
          setEditChanel(false);
          alert("Details updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating details:", error);
          alert("Failed to update details.");
        });
    }
  };

  return (
    <div className="container1_ECUD">
      <button
        type="button"
        className="ibtn_x_lsp"
        onClick={() => setEditChanel(false)}
      >
        &times;
      </button>
      <div className="container2_ECUD">
        <h1>Edit Your Details</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your/Chanel Name"
            className="ibox_lsp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows={15}
            placeholder="Enter Chanel Description"
            className="ibox_lsp"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="ibtn_lsp"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditChanelUserData;
