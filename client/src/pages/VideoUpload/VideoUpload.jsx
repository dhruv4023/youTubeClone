import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadVideo } from "../../actions/video";
import "./VideoUpload.css";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import { uploadVideo } from "../../api";

function VideoUpload({ setUploadVideo }) {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);

  const [singleProgress, setSingleProgress] = useState(0); //

  const [title, setTitle] = useState("");
  const [singleFile, setSingleFile] = useState("");

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };

  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
        setUploadVideo(false);
      }
    },
  };

  const uploadSingleFile = () => {
    // console.log(singleFile)
    if (!title) {
      alert("Plese Enter a Title of Your Video");
    } else if (!singleFile) {
      alert("Plese Attach Your Video");
    } else {
      const formData = new FormData();
      formData.append("file", singleFile);
      formData.append("title", title);
      formData.append("chanel", User?.result?._id);
      dispatch(
        uploadVideo({
          formData,
          singleFileOptions,
        })
      );
        setUploadVideo(false)
    }
  };

  return (
    <div className="container_VideoUpload">
      <input
        type="submit"
        name="date"
        value="x"
        className="ibtn_x_lsp"
        onClick={() => setUploadVideo(false)}
      />
      <div className="container2_VideoUpload">
        <div className="ibox_div_uploadVid">
          <input
            type="text"
            name="title"
            id="title"
            className="ibox_vidUpload"
            maxLength={30}
            placeholder="Enter Video Title Here..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="file" className="ibox_vidUpload btn_vidUpload">
            <input
              type="file"
              name="file"
              className="ibox_vidUpload"
              style={{ fontSize: "1rem" }}
              onChange={(e) => SingleFileChange(e)}
            />
          </label>
        </div>
        <div className="ibox_div_uploadVid">
          <input
            type="submit"
            value="Upload"
            className="ibox_vidUpload btn_vidUpload"
            onClick={() => uploadSingleFile()}
          />
        </div>
        <div className="loader ibox_div_uploadVid">
          {/* <CircularProgressbar
            value={singleProgress}
            text={`${singleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })} 
          />
            */}
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
