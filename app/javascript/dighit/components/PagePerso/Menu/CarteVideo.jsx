import React from 'react'

const CarteVideo = ({ songs, selectedVideo}) => {
  return (
    <div id="carte-video" onClick={() => selectedVideo(songs)}>
      <div id="image">
        <img src={songs.attributes.img} alt=""/>
      </div>
      <div id="carte-description">
        <p>{songs.attributes.title}</p>
        <p>Note de la vidéo : {songs.attributes.avg_score}</p>
      </div>
    </div>
  )
}

export default CarteVideo
