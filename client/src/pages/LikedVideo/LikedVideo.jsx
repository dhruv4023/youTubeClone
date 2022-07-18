
import React from 'react'
import { useSelector } from 'react-redux';
import WHL from '../WHL/WHL'

function LikedVideo() {
  const likedVideo = useSelector((state) => state.likedVideoReducer);
  
  return (
    <WHL   name={"LikedVideo"} whl={likedVideo}  />
  )
}

export default LikedVideo