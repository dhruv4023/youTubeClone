import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import AllRoutes from "./components/AllRoutes";
// import VideoUpload from "./pages/VideoUpload/VideoUpload";
// import EditChanelUserData from "./pages/ChanelPage/EditChanelUserData";
import BroadLeftSidebar from "./components/LeftSidebar/BroadLeftSidebar";
import { getAllVideos } from "./actions/video";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllVideos(dispatch)
  }, [])
  const [broadLeftSidebarBtn, setBroadLeftSidebarBtn] = useState("none");

  const toggleSidebar = () => {
    setBroadLeftSidebarBtn((prev) => (prev === "none" ? "flex" : "none"));
  };

  const [uploadVideo, setUploadVideo] = useState(false);
  const [editChanel, setEditChanel] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* {uploadVideo && <VideoUpload setUploadVideo={setUploadVideo} />}
        {editChanel && <EditChanelUserData setEditChanel={setEditChanel} />} */}
        <Navbar
          wdtToggle={toggleSidebar}
          handleEditChanel={() => setEditChanel(true)}
        />
        <BroadLeftSidebar
          wdtToggle={toggleSidebar}
          broadLeftSidebarBtn={{ display: broadLeftSidebarBtn }}
        />
        <AllRoutes
          handleUpload={() => setUploadVideo(true)}
          handleEditChanel={() => setEditChanel(true)}
        />
      </div>
    </Router>
  );
}

export default App;
