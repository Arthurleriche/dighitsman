import React from 'react'

const CarteYoutube = ({ resultat }) => {
  return (
    <div id="carte-video">
      <div id="image">
        <img src={resultat.snippet.thumbnails.high.url} alt=""/>
      </div>
      <div id="carte-description">
        <p>{resultat.snippet.title}</p>
      </div>
    </div>
  )
}

export default CarteYoutube
