import React from 'react'

const CarteVideo = ({ songs }) => {
  return (
    <div id="carte-video">
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
