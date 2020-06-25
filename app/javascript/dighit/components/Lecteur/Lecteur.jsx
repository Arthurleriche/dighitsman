import React from 'react'
import ReactPlayer from 'react-player';

const Lecteur = ({ video }) => {

const player = `https://youtube.com/embed/${video.url}`

  console.log(video)


  return (
    <div id="lecteur">
      <ReactPlayer
        url={player}
        playing={true}
        width='200px'
        height= '100px'
        controls={true}
      />
      <p>{video.title}</p>
    </div>
  )
}

export default Lecteur

