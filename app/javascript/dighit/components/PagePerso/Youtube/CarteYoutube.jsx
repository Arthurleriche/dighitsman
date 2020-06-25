import React, {useEffect} from 'react'

const CarteYoutube = ({ resultat, video, handleSelected }) => {

  useEffect(() => {
    video(resultat)
  },[])

  return (
    <div id="carte-youtube" onClick={handleSelected}>
      <div id="image">
        <img src={resultat.snippet.thumbnails.high.url} alt=""/>
      </div>
      <div id="carte-description-youtube">
        <p>{resultat.snippet.title}</p>
      </div>
    </div>
  )
}

export default CarteYoutube
