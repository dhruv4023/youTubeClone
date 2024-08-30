import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import DescribeChanel from "./DescribeChanel";

function Chanel({ wdt, handleUpload, handleEditChanel }) {
  const { Cid } = useParams();

  // Memoize the filtered and reversed video list for better performance
  const videoReducer = useSelector((state) => state.videoReducer);
  const vids = videoReducer?.data
    ?.filter((q) => q?.videoChanel === Cid)
    ?.reverse();

  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <DescribeChanel
          Cid={Cid}
          handleUpload={handleUpload}
          handleEditChanel={handleEditChanel}
        />
        {vids && vids.length > 0 ? (
          <ShowVideoGrid vids={vids} />
        ) : (
          <p>No videos available for this channel.</p>
        )}
      </div>
    </div>
  );
}

export default Chanel;
