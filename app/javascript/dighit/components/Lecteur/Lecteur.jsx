import React from 'react'
import ReactPlayer from 'react-player';

const Lecteur = ({ video }) => {

  const player = `https://youtube.com/embed/${video.url}`

  return (
    <div id="lecteur">
      <ReactPlayer
        url={player}
        playing={true}
        width='200px'
        height= '200px'
        controls={true}
      />
      <p>{video.title}</p>
    </div>
  )
}

export default Lecteur

