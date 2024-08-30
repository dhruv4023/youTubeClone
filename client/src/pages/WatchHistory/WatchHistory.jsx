
import React from 'react'
import { useSelector } from 'react-redux';
import WHL from '../WHL/WHL'

function WatchHistory() {
  const history = useSelector((state) => state.historyReducer);
  
  return (
    <WHL   name={"History"} whl={history}  />
  )
}

export default WatchHistory


// import React from "react";
// import { useSelector } from "react-redux";
// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import ShowVideoList from "../ShowVideoList/ShowVideoList";
// import "../WatchLater/WatchLater.css";
// function WatchHistory({ wdt }) {
  
//   const history = useSelector((state) => state.historyReducer);
//   const currentUser = useSelector((state) => state.user);
//   // console.log(currentUser)
//   // console.log(history)
//   // const currentUser =2
//   return (
//     <div className="container_pages">
//       <LeftSidebar   />
//       <div className="container_pages2">
//         <p className="det">
//           <div className="box_watchLater">
//             <b>Your Watch History Shown Here</b>
//           </div>
//           <div className="box_watchLater">
//             <h1> WatchHistory</h1>
//             {currentUser?.user?.id ? <>
          
//            {history?.data
//               ?.filter((q) =>( q?.Viewer === currentUser?.user?.id))
//               .map((m) => {
//                 console.log(m)
//                 return (
//                   <>
//                     <ShowVideoList key={m._id} videoId={m?.videoId} />
//                   </>
//                 );
//               })}
//             </>:<>
//               <h2>
//                 Plz Login to watch your history list
//               </h2>
//             </>}
//           </div>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WatchHistory;
