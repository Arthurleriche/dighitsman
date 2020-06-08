import React from 'react'


const Video = ({video, selectedVideo}) => {

  const testt = console.log(video.snippet.thumbnails.default.url)
  return (
    <div onClick={() => selectedVideo(video)} id="card-playlist">
      <div><h3>{video.snippet.title}</h3></div>
      <div><img src={video.snippet.thumbnails.default.url}/></div>
      {testt}
    </div>
  )
}

export default Video
