import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../actions/history";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ShowVideoList from "../ShowVideoList/ShowVideoList";
import "./WHL.css";
function WHL({ wdt, name, whl }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);

  const handleClearHistory = () => {
    if (currentUser) {
      dispatch(
        clearHistory({
          userId: currentUser?.result?._id,
        })
      );
    }
  };

  return (
    <div className="container_pages">
      <LeftSidebar wdt={wdt} />
      <div className="container_pages2">
        <p className="det">
          <div className="box_WHL leftside_whl">
            <b>Your {name} Shown Here</b>
            {name === "History" && (
              <div className="clear_HistoryBtn" onClick={handleClearHistory}>
                Clear Watch History
              </div>
            )}
          </div>
          <div className="box_WHL">
            <h1> {name}</h1>
            {currentUser?.result?._id ? (
              <>
                {whl?.data
                  ?.filter((q) => q?.Viewer === currentUser?.result?._id)
                  .reverse()
                  .map((m) => {
                    console.log(m);
                    return (
                      <>
                        <ShowVideoList key={m._id} videoId={m?.videoId} />
                      </>
                    );
                  })}
              </>
            ) : (
              <>
                <h2>Plz Login to watch your {name} list</h2>
              </>
            )}
          </div>
        </p>
      </div>
    </div>
  );
}

export default WHL;
