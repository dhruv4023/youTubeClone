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

function AllRoutes({ wdt, handleUpload, handleEditChanel,
  offLeftSideBar }) {
  return (
    <Routes>
      {/* <h1>HELLO</h1> */}

      <Route path="/" element={<Home wdt={wdt} />} />
      <Route path="/history" element={<WatchHistory wdt={wdt} />} />
      <Route path="/watchLater" element={<WatchLater wdt={wdt} />} />
      <Route path="/likedvideo" element={<LikedVideo wdt={wdt} />} />
      <Route path="/library" element={<Library wdt={wdt} />} />
      <Route path="/yourvideo" element={<YourVideos wdt={wdt} />} />
      <Route
        path="/VideoPage/:vid"
        element={<VideoPage wdt={wdt} offLeftSideBar={offLeftSideBar} />}
      />

      <Route
        path="/chanel/:Cid"
        element={
          <Chanel
            wdt={wdt}
            handleUpload={handleUpload}
            handleEditChanel={handleEditChanel}
          />
        }
      />
    </Routes>
  );
}

export default AllRoutes;
