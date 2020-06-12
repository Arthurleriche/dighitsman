import React from 'react'
import VideoYoutube from './VideoYoutube'

const Results = ({videos, selectedVideo}) => {
  const list = videos.map(data => {
    return <VideoYoutube video={data} selectedVideo={selectedVideo} />
  })

  return (
    <div id="section">
      <div id="title">
        <h2>recherches</h2>
      </div>
      <div id='card'>
        {list}
      </div>
    </div>
  )
}


export default Results
