import React from 'react'


const Video = ({video, selectedVideo}) => {


  return (
    <div onClick={() => selectedVideo(video)} id="card-playlist">
      <div><h3>{video.snippet.title}</h3></div>
      <div><img src={video.snippet.thumbnails.default.url}/></div>
    </div>
  )
}

export default Video
