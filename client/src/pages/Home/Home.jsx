import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./home.css";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
function Home({wdt}) {
  // const vid='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
  // const vid=;
  const Cid=null;
  return (
    <div className="container_pages">
      <LeftSidebar wdt={wdt}/>
      <div className="container_pages2">
        <ShowVideoGrid Cid={Cid}/>
      </div>
    </div>
  );
}

export default Home;
