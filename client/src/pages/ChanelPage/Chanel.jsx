import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import DescribeChanel from "./describeChanel";

function Chanel({ wdt, handleUpload, handleEditChanel }) {
  const { Cid } = useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChanel === Cid)
    ?.reverse();
    
  return (
    <div className="container_pages">
      <LeftSidebar   />
      <div className="container_pages2">
        <DescribeChanel
          Cid={Cid}
          handleUpload={handleUpload}
          handleEditChanel={handleEditChanel}
        />
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Chanel;
