import React from "react";
import "./Chanel.css";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
function DescribeChanel({ Cid, handleUpload, handleEditChanel }) {
  // console.log(chanels);

  const chanels = useSelector((state) => state.currentUserProfileReducer);
  const currentChanel = chanels.filter((user) => user._id === Cid)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  console.log(currentChanel);
  // const currentChanel = {
  //   age: "2022-06-01T00:00:00.000Z",
  //   email: "ab@mail.com",
  //   joinedOn: "2022-06-28T13:13:11.541Z",
  //   name: "ddd",
  //   tags: [],
  //   _id: "62bafe6752cea35a6c30685f",
  // };

  return (
    <div className="container3_chanel">
      <div className="chanelLogo_chanel">
        <b>
          {currentChanel ? (
            <>{currentChanel?.name.charAt(0).toUpperCase()}</>
          ) : (
            <>c</>
          )}
        </b>
      </div>
      <div className="description_chanel">
        <b>{currentChanel?.name}</b>
        <p>{currentChanel?.desc}</p>
      </div>
      {currentUser?.result._id === currentChanel?._id && (
        <>
          <p className="Editbtn_Chanel">
            <FaEdit />
            <b onClick={()=>handleEditChanel()}>Edit Chanel</b>
          </p>
          <p className="Uploadbtn_Chanel">
            <FaUpload />
            <b onClick={() => handleUpload()}>Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
}

export default DescribeChanel;
