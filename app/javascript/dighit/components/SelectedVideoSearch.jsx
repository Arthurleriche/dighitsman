import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios'

import Popup from './Playlists/Popup'

const SelectedVideoSearch = ({selectedVideo, infosSelectedVideo, id, addSong}) => {

  const [addNewSong, setAddNewSong] = useState({
    url: '',
    title: '',
    description: '',
    img: '',
    user_id: null,
    playlists_id: 1,
    score: null
    })

  const [playlist, setPlaylist] = useState(null)
  const [playlists, setPlaylists] = useState([])
  const [tooglePopUp, setTooglePopUp] = useState(false)
  const player = `https://youtube.com/embed/${selectedVideo}`
  const user_id = id

  useEffect(()=> {
  axios.get(`/api/v1/${id}/playlists`)
    .then(res => setPlaylists(res.data.data))
    .then(console.log(playlists))
   }, [tooglePopUp])

  useEffect(() => {
    setAddNewSong({
      url: {selectedVideo},
      title: `${infosSelectedVideo.title}`,
      description: `${infosSelectedVideo.description}`,
      img: `${infosSelectedVideo.thumbnails.high.url}`,
      user_id: user_id,
      playlist_id: playlist,
      score: 0
    })

  },[playlist])

const validatePlaylist = (e) => {

  e.preventDefault()
    addSong(addNewSong)
    setPlaylist(null)
}

 const handleSubmit = (e) => {
  playlist === null ? alert(' !!!!!!!!!!! il te faut une playlist pour commencer !!!!!!!!!!!!!') : validatePlaylist(e)
  }

  const selecPlaylist = (playlist) => {
    setPlaylist(playlist)
  }

  const tooglePopupFunction = () => {
    console.log('tooglePopUp')
    console.log(tooglePopUp)
    setTooglePopUp(!tooglePopUp);
  }

  const listOfPlaylits = playlists.map(data => {
    return <p onClick={() => selecPlaylist(data.id)}>{data.attributes.name} </p>
 })

  if (selectedVideo === '') {
    return <div> selectionner une vidéo </div>
  } else {
    return (
      <div id="section">
      <button onClick={tooglePopupFunction}>click ici pour rajouter une playlist</button>
        {tooglePopUp ?
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={tooglePopupFunction}
            id={user_id}
          />
          : null
        }
        <div id="title">
          <h2>{infosSelectedVideo.title}</h2>
        </div>
        <div id='card'>
          <div id="card-playlist">
            <ReactPlayer
              url={player}
              playing={true}
              width='300px'
              height='300px'
              controls={true}
            />
          </div>
          <button onClick={handleSubmit}>ajoute moi a ta playlist</button>
          <div>
          {listOfPlaylits}
          </div>
        </div>
      </div>
    )
  }
}


export default SelectedVideoSearch
