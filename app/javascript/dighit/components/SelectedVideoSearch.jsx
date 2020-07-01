import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios'

import Popup from './Popup/Popup'

const SelectedVideoSearch = ({ selectedVideo, infosSelectedVideo, id, addSong, playlistsitems}) => {

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
  const [load, setLoad] = useState(1)
  const [loadPlaylist, setLoadPlaylist] = useState(true)
  const player = `https://youtube.com/embed/${selectedVideo}`
  const user_id = id

  useEffect(()=> {
  axios.get(`/api/v1/${id}/playlists`)
    .then(res => setPlaylists(res.data.data))
    .then(console.log(playlists))
   }, [createPlaylist, id, load, loadPlaylist])

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
  },[selectedVideo, playlists, playlist])

  // const handleLoad = () => {
  //   setLoad(!load)
  // }

const validatePlaylist = (e) => {
  e.preventDefault()
  addSong(addNewSong)
  setPlaylist(null)
}



const createPlaylist = (newPlaylist) => {
    axios.post('/api/v1/playlists', newPlaylist)
    alert('tu viens de creer une playlist')
    togglePopupFunction()

  }

 const handleSubmit = (e) => {
  playlist === null ? alert(' !!!!!!!!!!! il te faut une playlist pour commencer !!!!!!!!!!!!!') : validatePlaylist(e)
  }

  const selecPlaylist = (playlist) => {
    setPlaylist(playlist)
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
          <div className="playlist">
          {listOfPlaylits}
          </div>
          <button onClick={togglePopupFunction}>click ici pour rajouter une playlist</button>
        {togglePopUp ?
          <Popup
            text='Click "Close Button" to hide popup'
            id={user_id}
            createPlaylist={createPlaylist}
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
