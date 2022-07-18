import React from "react";
import {  AiOutlineHome } from "react-icons/ai";

import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
} from "react-icons/md";

import shorts from "./shorts.png";
// import short from './youtube-shorts.svg'
import { NavLink } from "react-router-dom";
import "./LeftSidebar.css";
function LeftSidebar() {
  return (
    <div className="container_sidebar" >
        <>
          <NavLink to={"/"} className="icon_sidebar_div">
            <AiOutlineHome size={22} className="icon_sidebar" />
            <div className="text_sidebar_icon" style={{fontSize:"0.65rem"}}>Home</div>
          </NavLink>

          <div className="icon_sidebar_div">
            <MdOutlineExplore size={22} className="icon_sidebar" />
            <div className="text_sidebar_icon" style={{fontSize:"0.65rem"}}>Explore</div>
          </div>

          <div className="icon_sidebar_div">
            <img src={shorts} width={22} className="icon_sidebar" alt="" />
           <div className="text_sidebar_icon" style={{fontSize:"0.65rem"}}>Shorts</div>
          </div>

          <div className="icon_sidebar_div">
            <MdOutlineSubscriptions size={22} className="icon_sidebar" />
            <b style={{ fontSize: "9px" }}>Subcriptions</b>
          </div>
          <NavLink to={"/library"} className="icon_sidebar_div">
            <MdOutlineVideoLibrary size={22} className="icon_sidebar" />
            <div className="text_sidebar_icon" style={{fontSize:"0.65rem"}}>Library</div>
          </NavLink>
        </>

    </div>
  );
}

export default LeftSidebar;
