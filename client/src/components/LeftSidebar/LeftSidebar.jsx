import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";

import {
  AiFillLike,
} from "react-icons/ai";

import { MdOutlineWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./LeftSidebar.css";
function LeftSidebar({ wdt }) {
  return (
    <div className="container_sidebar" style={{ width: `${wdt.sdbar.width}` }}>
      {(wdt.sdbar.width === "5rem" && wdt.sdbar.display === "none") ? (
        <>
          <NavLink to={"/"} className="icon_sidebar_div">
            <AiOutlineHome size={30} className="icon_sidebar" />
            <b>Home</b>
          </NavLink>

          <NavLink to={"/history"} className="icon_sidebar_div">
            <FaHistory size={30} className="icon_sidebar" />
            <b>History</b>
          </NavLink>

          <NavLink to={"/watchlater"} className="icon_sidebar_div">
            <MdOutlineWatchLater size={30} className="icon_sidebar" />
            <b>Watch Later</b>
          </NavLink>

          <NavLink to={"/likedvideo"} className="icon_sidebar_div">
            <AiFillLike size={30} className="icon_sidebar" />
            <b>Liked Video</b>
          </NavLink>

        </>
      ) : (
        <>
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
          {/* <div className="subCriptions_lsdbar">
            <h3>Your Subcription</h3>
            <div className="chanel_lsdbar">
              <p>C</p><div>Chanel nm</div>
            </div>
            <div className="chanel_lsdbar">
              <p>C</p><div>Chanel nm</div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}

export default LeftSidebar;
