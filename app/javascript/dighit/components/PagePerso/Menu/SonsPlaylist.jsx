import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios'

import CarteVideo from './CarteVideo'

const SonsPlaylist = ({addSong, toutesLesPlaylists, playlist, id, selectedVideo, name}) => {

  const url = `/api/v1/playlists/${playlist}/songs`

  const [songs, setSongs] = useState([])
  const [song, setSong] = useState([])


  useEffect(() => {
    axios(url)
      .then(res => setSongs(res.data.data))
      .catch()
      listSon()
     },[playlist, song, addSong])


  const destroySong = (supSong) => {
    let reponse = confirm("Veux tu supprimer la vidéo ?")
    if(reponse){
    axios.delete(`/api/v1/songs/${supSong.id}`)
    }
    setTimeout(() => {
      setSong(supSong)
      console.log('supsong')
    }, 1000)
  }

  const listSon = () => {
   return songs.map((data) => {
    return <CarteVideo songs={data} key={data.id} selectedVideo={selectedVideo} destroySong={destroySong}/>
  })}

  return (
        <Fragment>
        <h3 className="titre">{name}</h3>
        <div id="mes-sons-listes">
          <div id="mes-sons-liste">
            {listSon()}
          </div>
        </div>
        </Fragment>
  )
}
export default SonsPlaylist
