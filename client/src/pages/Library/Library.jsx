import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

import WHLvideoLst from "../WHL/WHLvideoLst";
import "./Library.css";
function Library({ wdt }) {
    const currentUser = useSelector((state) => state.currentUserReducer);
  // const currentUser = {
  //   result: {
  //     desc: "Hello EveryOne Welcome to my Chanel !!!",
  //     email: "dhruv20345@gmail.com",
  //     joinedOn: "2022-07-15T19:23:15.011Z",
  //     name: "World",
  //     __v: 0,
  //     _id: "62d1bea3fd32862897ac6de1",
  //   },
  // };

  const watchLater = useSelector((state) => state.watchLaterReducer);
  // ?.data?.filter((q) => q?.Viewer === currentUser?.result?._id)
  // .reverse();
  const history = useSelector((state) => state.historyReducer);
  // ?.data?.filter((q) => q?.Viewer === currentUser?.result?._id)
  // .reverse();
  const likedVideo = useSelector((state) => state.likedVideoReducer);
  // ?.data?.filter((q) => q?.Viewer === currentUser?.result?._id)
  // .reverse();

  //   console.log(currentUser);
  console.log(history);

  return (
    <>
      <div className="container_pages">
        <LeftSidebar wdt={wdt} />
        <div className="container_pages2">
          <div className="library_conts">
            <p className="cont_WHL">
              <h1 className="Library_cont_title">
                <b>
                  <FaHistory />
                </b>
                <b>History</b>
              </h1>
              <div className="cont_videoslist_library">
                {currentUser ? (
                  <>
                    {" "}
                    <WHLvideoLst
                      name={"History"}
                      currentUser={currentUser?.result?._id}
                      whl={history}
                    />
                  </>
                ) : (
                  <h4>
                    <i> Plz Sign Up To see your History Video</i>
                  </h4>
                )}
              </div>
            </p>
          </div>
          <div className="library_conts">
            <p className="cont_WHL">
              <h1 className="Library_cont_title">
                <b>
                  <MdOutlineWatchLater />
                </b>
                <b>Watch Later</b>
              </h1>

              <div className="cont_videoslist_library">
                {currentUser ? (
                  <>
                    {" "}
                    <WHLvideoLst
                      name={"Watch Later"}
                      currentUser={currentUser?.result?._id}
                      whl={watchLater}
                    />
                  </>
                ) : (
                  <h4>
                    <i> Plz Sign Up To see your Saved Video</i>
                  </h4>
                )}
              </div>
            </p>
          </div>
          <div className="library_conts">
            <p className="cont_WHL">
              <h1 className="Library_cont_title">
                <b>
                  <AiOutlineLike />
                </b>
                <b>Liked Videos</b>
              </h1>
            </p>

            <div className="cont_videoslist_library">
              {currentUser ? (
                <>
                  {" "}
                  <WHLvideoLst
                    name={"Liked Videos"}
                    currentUser={currentUser?.result?._id}
                    whl={likedVideo}
                  />
                </> //
              ) : (
                <h4>
                  <i> Plz Sign Up To see your Liked Video</i>
                </h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;
