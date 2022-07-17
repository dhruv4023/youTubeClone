import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./home.css";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
function Home({ wdt }) {
  // const vid='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
  // const vid=;
  const Cid = null;
  const NavList=["All","Python","Java","C++","Nature","News","Health","JavaScript","Sports","Music","Movies","Comedy","Live","Gming","Animation"]
  return (
    <div className="container_pages">
      <LeftSidebar wdt={wdt} />
      <div className="container_pages2">
        <div className="navigation_Home">
          {
            NavList.map(m=>
              <p className="btn_home_nav">{m}</p>
              )
          }
        </div>
        <ShowVideoGrid Cid={Cid} />
      </div>
    </div>
  );
}

export default Home;
