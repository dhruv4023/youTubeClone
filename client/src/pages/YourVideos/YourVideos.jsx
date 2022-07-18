import React from "react";
import { useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";

import "./yourVideo.css";
function YourVideos() {
  const currentUser = useSelector((state) => state.currentUserReducer);

  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChanel === currentUser?.result?._id)
    ?.reverse();
  return (
    <>
      <div className="container_pages">
        <LeftSidebar   />
        <div className="container_pages2">
          <div className="yourvideo_container">
            <h1>YourVideos</h1>
            {currentUser ? (
              <ShowVideoGrid vids={vids} />
            ) : (
              <h3>Plz Login To see your Uploded Video</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default YourVideos;
