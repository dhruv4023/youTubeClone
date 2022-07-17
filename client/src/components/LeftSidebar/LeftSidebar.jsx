import React from "react";
import { AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
} from "react-icons/md";

import shorts from "./shorts.png";
// import short from './youtube-shorts.svg'
import { AiFillLike } from "react-icons/ai";

import { MdOutlineWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./LeftSidebar.css";
function LeftSidebar({ wdt }) {
  return (
    <div className="container_sidebar" style={{ width: `${wdt.sdbar.width}` }}>
      {wdt.sdbar.width === "5rem" && wdt.sdbar.display === "none" ? (
        <>
          <NavLink to={"/"} className="icon_sidebar_div">
            <AiOutlineHome size={30} className="icon_sidebar" />
            <b>Home</b>
          </NavLink>

          <div className="icon_sidebar_div">
            <MdOutlineExplore size={30} className="icon_sidebar" />
            <b>Explore</b>
          </div>

          <div className="icon_sidebar_div">
            <img src={shorts} width={30} className="icon_sidebar" alt="" />
            {/* <AiFillPlaySquare size={30}  /> */}
            <b>Shorts</b>
          </div>

          <div className="icon_sidebar_div">
            <MdOutlineSubscriptions size={30} className="icon_sidebar" />
            <b style={{ fontSize: "10px" }}>Subcriptions</b>
          </div>
          <NavLink to={"/library"} className="icon_sidebar_div">
            <MdOutlineVideoLibrary size={30} className="icon_sidebar" />
            <b>Library</b>
          </NavLink>
        </>
      ) : (
        <>
          <div className="HESS_leftSidebar">
            <NavLink to={"/"} className="icon_sidebar_div">
              <p>
                <AiOutlineHome
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Home</b>
              </p>
            </NavLink>
            <div className="icon_sidebar_div">
              <p>
                <MdOutlineExplore
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Explore</b>
              </p>
            </div>
            <div className="icon_sidebar_div">
              <p>
              <img src={shorts} width={20} style={{ margin: "auto 0" }} className="icon_sidebar" alt="" />
          
                {/* <AiFillPlaySquare
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                /> */}
                <b>Shorts</b>
              </p>
            </div>
            <div className="icon_sidebar_div">
              <p>
                <MdOutlineSubscriptions
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Subcriptions</b>
              </p>
            </div>
          </div>
          <div  className="libraryBtn_leftSidebar">
            <NavLink to={"/library"}   className="icon_sidebar_div">
              <p>
                <MdOutlineVideoLibrary
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Library</b>
              </p>
            </NavLink>
            <NavLink to={"/history"} className="icon_sidebar_div">
              <p>
                <FaHistory
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>History</b>
              </p>
            </NavLink>
            <NavLink to={"/yourvideo"}  className="icon_sidebar_div">
              <p>
                <AiFillPlaySquare
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Your Videos</b>
              </p>
            </NavLink>
            <NavLink to={"/watchlater"} className="icon_sidebar_div">
              <p>
                <MdOutlineWatchLater
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Watch Later</b>
              </p>
            </NavLink>
            <NavLink to={"/likedvideo"} className="icon_sidebar_div">
              <p>
                <AiFillLike
                  size={20}
                  className="icon_sidebar"
                  style={{ margin: "auto 0" }}
                />
                <b>Liked Video</b>
              </p>
            </NavLink>
          </div>
          <div className="subCriptions_lsdbar">
            <h3>Your Subcription</h3>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>Chanel nm</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>Chanel nm</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p>
              <div>Chanel nm</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LeftSidebar;
