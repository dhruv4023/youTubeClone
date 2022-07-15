import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import ShowVideo from "../ShowVideo/ShowVideo";
// import vid from "../../components/Video/vid.mp4";

function ShowVideoList({ videoId, date }) {
  const vids = useSelector((state) => state.videoReducer);
  // console.log(showListedVideo);

  // console.log(vids);
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //   },
  //   {
  //     _id: 2,
  //     video_src: "vid",
  //   },
  //   {
  //     _id: 3,
  //     video_src: "vid",
  //   },
  //   {
  //     _id: 4,
  //     video_src: "vid",
  //   },
  //   {
  //     _id: 5,
  //     video_src: "vid",
  //   },
  // ];
  return (
    <div className="container_home">
      {videoId ? (
        <>
          {vids?.data
            ?.filter((q) => q._id === videoId)
            .map((vi) => {
              // console.log(vi)
              return (
                <div className="video_box">
                  <ShowVideo vid={vi} />
                  {date && <i className="ViewedOn_history">Viewed On : {moment(date).format("DD/MM/YYYY")}</i>}
                </div>
              );
            })}
        </>
      ) : (
        <h2>You have No Video Watched Yet !!</h2>
      )}
    </div>
  );
}

export default ShowVideoList;
