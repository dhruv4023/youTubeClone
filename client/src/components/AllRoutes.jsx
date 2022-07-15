import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import WatchHistory from "../pages/WatchHistory/WatchHistory.jsx";
import VideoPage from "../pages/VideoPage/VideoPage";
import WatchLater from "../pages/WatchLater/WatchLater";
import Chanel from "../pages/ChanelPage/Chanel";
import LikedVideo from "../pages/LikedVideo/LikedVideo";

function AllRoutes({ wdt, handleUpload, handleEditChanel }) {
  return (
    <Routes>
      {/* <h1>HELLO</h1> */}
      
      <Route path="/" element={<Home wdt={wdt} />} />
      <Route path="/history" element={<WatchHistory wdt={wdt} />} />
      <Route path="/watchLater" element={<WatchLater wdt={wdt} />} />
      <Route path="/likedvideo" element={<LikedVideo wdt={wdt} />} />
      <Route path="/VideoPage/:vid" element={<VideoPage wdt={wdt} />} />

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
