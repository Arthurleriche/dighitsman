import React from 'react'
import axios from 'axios'

import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

const CarteVideo = ({ songs, selectedVideo, destroySong}) => {
  const deleteSong = () => {
    destroySong(songs)
  }

  return (
    <div>
      <div id="carte-video" onClick={() => selectedVideo(songs)}>
        <div id="image">
          <img src={songs.attributes.img} alt=""/>
        </div>
        <div id="carte-description">
          <p>{songs.attributes.title}</p>
          <p>Note de la vidéo : {songs.attributes.avg_score}</p>
        </div>
      </div>
      <div><DeleteForeverSharpIcon onClick={deleteSong}/></div>
    </div>
  )
}

export default CarteVideo
