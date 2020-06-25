import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SonsPlaylist from './SonsPlaylist'
import CartePlaylists from './CartePlaylists'

const MesPlaylists = ({selectedVideo, id }) => {

  const url = `/api/v1/${id}/playlists`

  const [playlists, setPlaylists] = useState([])
  const [playlist, setPlaylist] = useState(null)
  const [name, setName] = useState("")

  useEffect(() => {
    axios(url)
      .then(res => setPlaylists(res.data.data))
      .catch()
     },[])


  const selectedPlaylists = (playlist) => {
    setPlaylist(playlist.id)
    setName(playlist.attributes.name)
    console.log(playlist.attributes.name)
  }

  const list = playlists.map((data) => {
    return <CartePlaylists playlists={data} key={data.id} selectedPlaylists={selectedPlaylists} />
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
      <SonsPlaylist playlist={playlist} id={id} selectedVideo={selectedVideo} toutesLesPlaylists={toutesLesPlaylists} name={name}/>
    </div>

  )
}


export default MesPlaylists
