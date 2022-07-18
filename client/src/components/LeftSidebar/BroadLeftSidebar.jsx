import React from "react";
import "./LeftSidebar.css";

import { AiFillLike } from "react-icons/ai";

import { AiFillPlaySquare, AiOutlineHome } from "react-icons/ai";

import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
} from "react-icons/md";

import shorts from "./shorts.png";
import { NavLink } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

function BroadLeftSidebar({ wdtToggle, broadLeftSidebarBtn }) {
  return (
    <div className="broadLiftSidebar_cont" style={broadLeftSidebarBtn}>
      <div className="broadLiftSidebar_cont2">
        <div className="HESS_leftSidebar">
          <NavLink to={"/"} className="icon_sidebar_div">
            <p>
              <AiOutlineHome
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </p>
          </NavLink>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineExplore
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <img
                src={shorts}
                width={22}
                style={{ margin: "auto 0.7rem" }}
                className="icon_sidebar"
                alt=""
              />

              <div className="text_sidebar_icon">Shorts</div>
            </p>
          </div>
          <div className="icon_sidebar_div">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subcriptions</div>
            </p>
          </div>
        </div>
        <div className="libraryBtn_leftSidebar">
          <NavLink to={"/library"} className="icon_sidebar_div">
            <p>
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </p>
          </NavLink>
          <NavLink to={"/history"} className="icon_sidebar_div">
            <p>
              <FaHistory
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </p>
          </NavLink>
          <NavLink to={"/yourvideo"} className="icon_sidebar_div">
            <p>
              <AiFillPlaySquare
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </p>
          </NavLink>
          <NavLink to={"/watchlater"} className="icon_sidebar_div">
            <p>
              <MdOutlineWatchLater
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </p>
          </NavLink>
          <NavLink to={"/likedvideo"} className="icon_sidebar_div">
            <p>
              <AiFillLike
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Video</div>
            </p>
          </NavLink>
        </div>
        <div className="subCriptions_lsdbar">
          <h3>Your Subcription</h3>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel </div>
          </div>
        </div>
      </div>

      <div className="broadLiftSidebar_cont3" onClick={() => wdtToggle()}></div>
    </div>
  );
}

export default BroadLeftSidebar;
