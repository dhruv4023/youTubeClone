import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
// import vid from "../../components/Video/vid.mp4";
// import { getVideos } from "../../actions/video";
import { useSelector } from "react-redux";

function ShowVideoGrid({ Cid }) {
  const vids = useSelector((state) => state.videoReducer);

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
      {Cid ? (
        <>
          {vids?.data?.filter(q=>q.videoChanel===Cid).reverse().map((vi) => {
            // console.log(vi)
            return (
              <div className="video_box" key={vi._id}>
                <ShowVideo  vid={vi} />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {vids?.data?.filter(q=>q).reverse().map((vi) => {
            // console.log(vi)
            return (
              <div key={vi._id} className="video_box">
                <ShowVideo  vid={vi} morVid={vids} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ShowVideoGrid;
