import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SonsPlaylist from './SonsPlaylist'
import CartePlaylists from './CartePlaylists'



const MesPlaylists = ({selectedVideo, id, actual, addSong, supSong, destroySong }) => {

  const url = `/api/v1/${id}/playlists`
  const urlSongs = `/api/v1/${id}/songs`

  const [playlists, setPlaylists] = useState([])
  const [playlist, setPlaylist] = useState(null)
  const [name, setName] = useState("")
  const [songs, setSongs] = useState([])


  useEffect(() => {
    axios(url)
      .then(res => setPlaylists(res.data.data))
      .catch()
    axios(urlSongs)
      .then(res => setSongs(res.data.data))
      .catch()
      setSongs(songs)
     },[supSong])

  useEffect(() => {
    if (actual == ""){
    }else {
      setPlaylists([...playlists, actual])
    }
  }, [actual])



  useEffect(() => {
    if (addSong == ""){
    }else {
      setSongs([...songs, addSong])
    }
  }, [addSong])


  const selectedPlaylists = (playlist) => {
    setPlaylist(playlist.id)
    setName(playlist.attributes.name)
  }

  let tri = []

  const playPlaylist = (playlist_id) => {
   tri  = songs.filter(song => song.attributes.playlist_id == playlist_id);
    if (tri[0] === undefined){
    } else {
    selectedVideo(tri[0])
    }
  }



  const list = playlists.map((data) => {
    return <CartePlaylists playlists={data} key={data.id} selectedPlaylists={selectedPlaylists} playPlaylist={playPlaylist} songs={songs}/>
  })

  const toutesLesPlaylists = () => {
    setPlaylist(null)
  }

  return (
    <div id="mes-sons">
      <h3 className="titre">Mes Playlists</h3>
        <div id="mes-sons-listes">
          <div id="mes-sons-liste">
          {list}
          </div>
        </div>
      <SonsPlaylist playlist={playlist} id={id} selectedVideo={selectedVideo} toutesLesPlaylists={toutesLesPlaylists} name={name} destroySong={destroySong} addSong={addSong}/>
    </div>

  )
}


export default MesPlaylists
