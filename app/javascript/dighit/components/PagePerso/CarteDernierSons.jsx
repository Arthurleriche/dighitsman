import React from 'react'
import axios from 'axios'

import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

const CarteDernierSons = ({ allSongs, selectedVideo}) => {
  const deleteSong = () => {
    destroySong(allSongs)
  }

  return (
    <div>
      <div id="carte-video-recent" onClick={() => selectedVideo(allSongs)}>
        <div id="image">
          <img src={allSongs.attributes.img} alt=""/>
        </div>
        <div id="carte-description">
          <p>{allSongs.attributes.title}</p>
          <p>Note de la vidéo : {allSongs.attributes.avg_score}</p>
        </div>
    </div>
    </div>
  )
}

export default CarteDernierSons
