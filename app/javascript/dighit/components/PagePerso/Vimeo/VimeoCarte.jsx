import React, {useEffect, useState} from 'react';
import axios from 'axios'

import Popup from "reactjs-popup";

import AddPlaylist from '../Menu/AddPlaylist'


const VimeoCarte = ({selectedVideo, playlistActual, resultat, handleSelected, id, addSongToArray }) => {

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
  const [selected, setSelected] = useState({})
  const [actual, setActual] = useState()
  const [newSong, setNewSong] = useState("")

  useEffect(() => {
    const url = `/api/v1/${id}/playlists`
    axios(url)
      .then(res => setPlaylists(res.data.data))
      .catch()
    setSelected({
      attributes: {
        cloud: resultat.link,
        title: resultat.name,
        description: resultat.description,
        url: ""
    }})
     },[]);

  // useEffect(() => {
  //   setSong({
  //     avg_score: null,
  //     url: '',
  //     title: resultat.name,
  //     description: resultat.description,
  //     img: resultat.pictures.sizes[4].link,
  //     user_id: id,
  //     playlist_id: ,
  //     cloud: resultat.link
  //   })
  // },[playlist])

  const selectedPlaylist = (playlist_id) => {
    setSong({
      avg_score: null,
      url: '',
      title: resultat.name,
      description: resultat.description,
      img: resultat.pictures.sizes[4].link,
      user_id: id,
      playlist_id: playlist_id,
      cloud: resultat.link
    })
    console.log(song)
  }

  const addPlaylistToArray = (playlist) => {
    setPlaylists([...playlists, playlist])
  }

  const addVideoToPlaylist = () => {
    axios.post('/api/v1/songs', song);
    alert('add')
    addSongToArray({attributes: song})
    setTimeout(() => {
      setSong({
      url: '',
      title: '',
      description: '',
      img: '',
      user_id: null,
      playlist_id: null,
      score: null,
      cloud: ''
    })
    },1000)
  }

  let res = []

  const createPlaylist = (newPlaylist) => {
    const response = axios.post('/api/v1/playlists', newPlaylist)
      .then(res => add(res.data.data, res.data.data))
  }

  const add = (un, deux) => {
    playlistActual(un)
    addPlaylistToArray(deux)
  }

  const listPlaylist = playlists.map((data) => {
    return <a key={data.id} onClick={() => selectedPlaylist(data.id)} id="name-playlist">{data.attributes.name}</a>
  })


    const selectVideo = () => {
    selectedVideo(selected)
    console.log(selected)
  }

  return (
    <div id="carte-youtube" >
      <div id="image" onClick={selectVideo}>
        <img src={resultat.pictures.sizes[4].link} alt=""/>
      </div>
      <div id="carte-description-youtube" onClick={selectVideo}>
        <p>{resultat.name}</p>
      </div>
        <Popup trigger={<button > ajoute moi à une de tes playlists</button>}  position="left">
          <div id="popup-add-to-playlists">
            <div id="addplaylist">
              {listPlaylist}
            </div>
            <div id="button-add-playlist">
              <button onClick={addVideoToPlaylist}>add to playlist</button>
            </div>
          </div>
            <AddPlaylist createPlaylist={createPlaylist} id={id} addPlaylistToArray={addPlaylistToArray}/>
        </Popup>
    </div>
  )
}

export default VimeoCarte
