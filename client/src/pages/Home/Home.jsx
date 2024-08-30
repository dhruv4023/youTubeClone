import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./home.css";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import { useSelector } from "react-redux";
function Home() {

  const vids = useSelector((state) => state.videos)

  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Nature",
    "News",
    "Health",
    "JavaScript",
    "Sports",
    "Music",
    "Movies",
    "Comedy",
    "Live",
    "Gaming",
    "Animation",
  ];
  return (
    <div className="container_pages">
      <LeftSidebar/>
      <div className="container_pages2">
        <div className="navigation_Home">
          {NavList.map((m) => (
            <div className="btn_home_nav" key={m}>{m}</div>
          ))}
        </div>
        <ShowVideoGrid  vids={vids} />
      </div>
    </div>
  );
}

export default Home;
