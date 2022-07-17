import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLvideoLst({ name, currentUser, whl }) {
//   console.log(name, currentUser, whl);
  return (
    <>
      {currentUser ? (
        <>
          {whl?.data
            ?.filter((q) => q?.Viewer === currentUser)
            .reverse()
            .map((m) => {
              // console.log(m);
              return (
                <>
                  <ShowVideoList
                    key={m._id}
                    videoId={m?.videoId}
                    date={m?.viewedOn}
                  />
                </>
              );
            })}
        </>
      ) : (
        <>
          <h2 style={{color:"white"}}>Plz Login to watch your {name} list</h2>
        </>
      )}
    </>
  );
}

export default WHLvideoLst;
