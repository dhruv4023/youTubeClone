// import moment from "moment";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../actions/user";
import "./editChanel.css";
function EditChanelUserData({ setEditChanel }) {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUserReducer);
//   console.log(currentUser);
  const [name, setName] = useState(currentUser?.result?.name);
  // const [age, setAge] = useState("");
  const [desc, setDesc] = useState(currentUser?.result?.desc);
  const handleSubmit = () => {
    if (!name) {
      alert("Enter Name !");
    } else if (!desc) {
      alert("Enter Chanel Description !");
    } else {
      dispatch(
        updateUserData(currentUser?.result?._id, {
          name: name,
          desc: desc,
        })
      );
      setEditChanel(false);
      alert("Done !!!");
    }
  };
  return (
    <div className="container1_ECUD">
      <input
        type="submit"
        name="date"
        value="x"
        className="ibtn_x_lsp"
        onClick={() => setEditChanel(false)}
      />
      <div className="container2_ECUD">
        <h1>Edit Your Details</h1>
        <input
          type="text"
          name="text"
          placeholder="Enter Your/Chanel Name"
          className="ibox_lsp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          rows={15}
          name="text"
          value={desc}
          placeholder="Enter Chanel Description"
          className="ibox_lsp"
          onChange={(e) => setDesc(e.target.value)}
        />{" "}
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="ibtn_lsp"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default EditChanelUserData;
