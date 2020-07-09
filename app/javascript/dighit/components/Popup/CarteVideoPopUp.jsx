import React from 'react'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

const CarteVideoPopUp = ({songs, selectedVideo, destroySong}) => {
  const deleteSong = () => {
    destroySong(songs)
  }

  console.log(songs)
  return(
    <div id="carte-video-popup">
    <div id="carte-video-popup2" onClick={() => selectedVideo(songs)}>
      <div id="carte-video-popup-photo">
       <img src={songs.attributes.img} alt=""/>
      </div>
      <div id="carteVideoInfos">
        <p>{songs.attributes.title}</p>
        <p>Note de la vidéo : {songs.attributes.avg_score}</p>
      </div>
    </div>
    <div><DeleteForeverSharpIcon onClick={deleteSong}/></div>
    </div>
  )
}

export default CarteVideoPopUp


