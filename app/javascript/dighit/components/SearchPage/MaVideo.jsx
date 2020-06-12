import React from 'react'

const MaVideo = ({video, selectedMaVideo}) => {
  return (
    <div onClick={() => selectedMaVideo(video)} id="card-playlist">
      <div><h3>{video.title}</h3></div>
    </div>
  )
}

export default MaVideo


    // <div onClick={() => selectedVideo(video)} id="card-playlist">
