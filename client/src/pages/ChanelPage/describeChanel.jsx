import React, { useState, useEffect } from "react";
import "./Chanel.css";
import { FaEdit, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

function DescribeChanel({ Cid, handleUpload, handleEditChanel }) {
  const [currentChanel, setCurrentChanel] = useState(null);

  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    const fetchChanel = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/user/${Cid}`
        );
        setCurrentChanel(response.data);
      } catch (error) {
        console.error("Error fetching the chanel data", error);
      }
    };

    fetchChanel();
  }, [Cid]);

  return (
    <div className="container3_chanel">
      <div className="chanelLogo_chanel">
        <b>
          {currentChanel ? (
            <>{currentChanel?.name.charAt(0).toUpperCase()}</>
          ) : (
            <>C</>
          )}
        </b>
      </div>
      <div className="description_chanel">
        <b>{currentChanel?.name}</b>
        <p>{currentChanel?.desc}</p>
      </div>
      {currentUser.id === currentChanel?._id && (
        <>
          <p className="Editbtn_Chanel" onClick={handleEditChanel}>
            <FaEdit />
            <b>Edit Chanel</b>
          </p>
          <p className="Uploadbtn_Chanel" onClick={handleUpload}>
            <FaUpload />
            <b>Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
}

export default DescribeChanel;
