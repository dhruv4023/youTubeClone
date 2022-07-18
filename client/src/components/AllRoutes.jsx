import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import WatchHistory from "../pages/WatchHistory/WatchHistory.jsx";
import VideoPage from "../pages/VideoPage/VideoPage";
import WatchLater from "../pages/WatchLater/WatchLater";
import Chanel from "../pages/ChanelPage/Chanel";
import LikedVideo from "../pages/LikedVideo/LikedVideo";
import Library from "../pages/Library/Library";
import YourVideos from "../pages/YourVideos/YourVideos";

function AllRoutes({ handleUpload, handleEditChanel }) {
  return (
    <Routes>
      {/* <h1>HELLO</h1> */}

      <Route path="/" element={<Home />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route path="/watchLater" element={<WatchLater />} />
      <Route path="/likedvideo" element={<LikedVideo />} />
      <Route path="/library" element={<Library />} />
      <Route path="/yourvideo" element={<YourVideos />} />
      <Route
        path="/VideoPage/:vid"
        element={<VideoPage  />}
      />

      <Route
        path="/chanel/:Cid"
        element={
          <Chanel
          
            handleUpload={handleUpload}
            handleEditChanel={handleEditChanel}
          />
        }
      />
    </Routes>
  );
}

export default AllRoutes;
