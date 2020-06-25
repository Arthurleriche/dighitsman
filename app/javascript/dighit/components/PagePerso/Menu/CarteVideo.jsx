import React from 'react'

const CarteVideo = ({ songs, selectedVideo}) => {
  return (
    <div id="carte-video" onClick={() => selectedVideo(songs)}>
      <div id="image">
        <img src={songs.img} alt=""/>
      </div>
      <div id="carte-description">
        <p>{songs.title}</p>
        <p>{songs.score}</p>
      </div>
    </div>
  )
}

export default CarteVideo
