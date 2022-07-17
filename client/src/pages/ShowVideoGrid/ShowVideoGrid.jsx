import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
// import vid from "../../components/Video/vid.mp4";
// import { getVideos } from "../../actions/video";

function ShowVideoGrid({ vids }) {
  // console.log(vids);

  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel:"62bafe6752cea35a6c30685f",
  //     title:"video 1",
  //     description:"description of  video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: "vid",
  //     Chanel:"cdd",
  //     title:"video 2",
  //     description:"description of  video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: "vid",
  //     Chanel:"add",
  //     title:"video 3",
  //     description:"description of  video 3"
  //   },
  // ];

  return (
    <div className="container_home">
      {vids?.map((vi) => {
        // console.log(vi)
        return (
          <div key={vi._id} className="video_box">
            <ShowVideo vid={vi}  />
          </div>
        );
      })}
    </div>
  );
}

export default ShowVideoGrid;
