import React, {useEffect, useState} from 'react';
import axios from 'axios'

import Popup from "reactjs-popup";


const CarteYoutube = ({ resultat, video, handleSelected, id }) => {

  const [playlists, setPlaylists] = useState([])
  const [playlist, setPlaylist] = useState(null)
  const [song, setSong] = useState({
    url: '',
    title: '',
    description: '',
    img: '',
    user_id: null,
    playlist_id: null,
    score: null
  })

  useEffect(() => {
    const url = `/api/v1/${id}/playlists`
    axios(url)
      .then(res => setPlaylists(res.data.data))
      .catch()
     },[]);

  useEffect(() => {
    video(resultat)
  },[resultat]);

  useEffect(() => {
    setSong({
      url: resultat.id.videoId,
      title: resultat.snippet.title,
      description: resultat.snippet.description,
      img: resultat.snippet.thumbnails.high.url,
      user_id: id,
      playlist_id: playlist,
      score: 0,
    })
  },[playlist])

  const selectedPlaylist = (playlist_id) => {
    setPlaylist(playlist_id)
  }

  const addVideoToPlaylist = () => {
    axios.post('/api/v1/songs', song);
  }

  const listPlaylist = playlists.map((data) => {
    return <a onClick={() => selectedPlaylist(data.id)} id="name-playlist">{data.attributes.name}</a>
  })

  return (
    <div id="carte-youtube" >
      <div id="image" onClick={handleSelected}>
        <img src={resultat.snippet.thumbnails.high.url} alt=""/>
      </div>
      <div id="carte-description-youtube" onClick={handleSelected}>
        <p>{resultat.snippet.title}</p>
      </div>
        <Popup trigger={<button> ajoute moi à une de tes playlists</button>} position="top-left">
          <div id="popup-add-to-playlists">
            <div id="addplaylist">
              {listPlaylist}
            </div>
            <div id="button-add-playlist">
              <button onClick={addVideoToPlaylist}>add to playlist</button>
            </div>
          </div>
        </Popup>
    </div>
  )
}

export default CarteYoutube
