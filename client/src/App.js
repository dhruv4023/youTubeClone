import "./App.css";
import Navbar from "./components/NavBar/Navbar";
// import LoginSignupPage from "./pages/Auth/loginSignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import AllRoutes from "./components/AllRoutes";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import EditChanelUserData from "./pages/ChanelPage/EditChanelUserData";
import { useDispatch } from "react-redux";

import { fetchAllUsers } from "./actions/user";
import { getVideos } from "./actions/video";
import { getwatchLater } from "./actions/watchlater";
import { getHistory } from "./actions/history";
import { getlikedVideo } from "./actions/likedVideo";
import { getAllcomments } from "./actions/comments";
import BroadLeftSidebar from "./components/LeftSidebar/BroadLeftSidebar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(getVideos());
    dispatch(getHistory());
    dispatch(getwatchLater());
    dispatch(getAllcomments());
    dispatch(getlikedVideo());
  }, [dispatch]);

  const [broadLeftSidebarBtn, setbroadLeftSidebarBtn] = useState({
    display: "none",
  });

  const wdtToggle = () => {
    console.log(broadLeftSidebarBtn)
    if (broadLeftSidebarBtn.display === "none")
      setbroadLeftSidebarBtn({
        display: "flex",
      });
    else
      setbroadLeftSidebarBtn({
        display: "none",
      });
  };
  // console.log(`${process.env.REACT_APP_SERVER}`)
  const [uploadVideo, setUploadVideo] = useState(false);
  const [EditChanel, setEditChanel] = useState(false);
  // const [loginPage, setLoginPage] = useState(false);
  // const [login, setLogin] = useState(true);

  // const handleLogin = () => {
  //   // setLogin(true);
  //   setLoginPage(true);
  // };

  const handleUpload = () => {
    // console.log(uploadVideo)
    setUploadVideo(true);
  };

  const handleEditChanel = () => {
    // console.log(uploadVideo)
    setEditChanel(true);
  };

  return (
    <>
      <Router>
        <div className="App">
          {/* {loginPage && (
            <LoginSignupPage
              setLoginPage={setLoginPage}
            />
          )} */}

          {uploadVideo && <VideoUpload setUploadVideo={setUploadVideo} />}
          {EditChanel && <EditChanelUserData setEditChanel={setEditChanel} />}
          <Navbar
            wdtToggle={wdtToggle}
            // setLoginPage={setLoginPage}
            handleEditChanel={handleEditChanel}
          />
          <BroadLeftSidebar wdtToggle={wdtToggle} broadLeftSidebarBtn={broadLeftSidebarBtn} />
          <AllRoutes
            handleUpload={handleUpload}
            handleEditChanel={handleEditChanel}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
