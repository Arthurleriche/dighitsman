import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios'

import Popup from './Popup/Popup'

const SelectedVideoSearch = ({selectedVideo, infosSelectedVideo, id, addSong}) => {

  const [addNewSong, setAddNewSong] = useState({
    url: '',
    title: '',
    description: '',
    img: '',
    user_id: null,
    playlist_id: 1,
    score: null
    })

  const [playlist, setPlaylist] = useState(null)
  const [playlists, setPlaylists] = useState([])
  const [togglePopUp, setTogglePopUp] = useState(false)
  const [load, setLoad] = useState(true)
  const player = `https://youtube.com/embed/${selectedVideo}`
  const user_id = id

  useEffect(()=> {
  axios.get(`/api/v1/${id}/playlists`)
    .then(res => setPlaylists(res.data.data))
    .then(console.log(playlists))
   }, [load, togglePopUp, playlist])

  useEffect(() => {
    setAddNewSong({
      url: selectedVideo,
      title: `${infosSelectedVideo.title}`,
      description: `${infosSelectedVideo.description}`,
      img: `${infosSelectedVideo.thumbnails.high.url}`,
      user_id: user_id,
      playlist_id: playlist,
      score: 0,
    })
  },[selectedVideo, playlists])

  const handleLoad = () => {
    setLoad(!load)
    console.log(load)
  }

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
    console.log(playlist)
  }

  const togglePopupFunction = () => {
    setTogglePopUp(!togglePopUp);
  }

  const listOfPlaylits = playlists.map(data => {
    return <p onClick={() => selecPlaylist(data.id)}>{data.attributes.name} </p>
 })

  if (selectedVideo === '') {
    return <div> selectionner une vidéo </div>
  } else {
    return (
      <div id="section">
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
          <button onClick={togglePopupFunction}>click ici pour rajouter une playlist</button>
        {togglePopUp ?
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={togglePopupFunction}
            id={user_id}
            handleLoad={handleLoad}
          />
          : null
        }
          </div>
        </div>
      </div>
    )
  }
}


export default SelectedVideoSearch
