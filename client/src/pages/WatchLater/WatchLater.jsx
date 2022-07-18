import React from 'react'
import { useSelector } from 'react-redux';
import WHL from '../WHL/WHL'

function WatchLater() {
  const watchLater = useSelector((state) => state.watchLaterReducer);
  
  return (
    <WHL   name={"WatchLater"} whl={watchLater}  />
  )
}

export default WatchLater

// import React from "react";
// import { useSelector } from "react-redux";
// import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
// import ShowVideoList from "../ShowVideoList/ShowVideoList";
// import "../WatchLater/WatchLater.css";
// function WatchLater({ wdt }) {
  
//   const watchLater = useSelector((state) => state.watchLaterReducer);
//   const currentUser = useSelector((state) => state.currentUserReducer);
//   console.log(currentUser)
//   console.log(watchLater)
//   // const currentUser =2
//   return (
//     <div className="container_pages">
//       <LeftSidebar   />
//       <div className="container_pages2">
//         <p className="det">
//           <div className="box_watchLater">
//             <b>Your watchLater Videos Shown Here</b>
//           </div>
//           <div className="box_watchLater">
//             <h1> watchLater </h1>
//             {currentUser?.result?._id ? <>
          
//            {watchLater?.data
//               ?.filter((q) =>( q?.Viewer === currentUser?.result?._id))
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
//                 Plz Login to watch your WatchLater list
//               </h2>
//             </>}
//           </div>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WatchLater;
