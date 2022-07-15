import React from "react";
import { useParams } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import DescribeChanel from "./describeChanel";

function Chanel({ wdt, handleUpload, handleEditChanel }) {
  const { Cid } = useParams();
  return (
    <div className="container_pages">
      <LeftSidebar wdt={wdt} />
      <div className="container_pages2">
        <DescribeChanel
          Cid={Cid}
          handleUpload={handleUpload}
          handleEditChanel={handleEditChanel}
        />
        <ShowVideoGrid Cid={Cid} />
      </div>
    </div>
  );
}

export default Chanel;
