
import React from 'react'
import { useSelector } from 'react-redux';
import WHL from '../WHL/WHL'

function LikedVideo({wdt}) {
  const likedVideo = useSelector((state) => state.likedVideoReducer);
  
  return (
    <WHL wdt={wdt} name={"LikedVideo"} whl={likedVideo}  />
  )
}

export default LikedVideo