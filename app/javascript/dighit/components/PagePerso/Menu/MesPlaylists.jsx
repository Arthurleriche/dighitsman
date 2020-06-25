import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CartePlaylists from './CartePlaylists'

const MesPlaylists = () => {

  const url = `/api/v1/1/playlists`

  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    axios(url)
      .then(res => setPlaylists(res.data.data))
      .catch()
     },[])


  const list = playlists.map((data) => {
    return <CartePlaylists playlists={data} key={data.id} />
  })

  return (
    <div id="mes-sons">
      <h3 className="titre">Mes Playlists</h3>
        <div id="mes-sons-listes">
          <div id="mes-sons-liste">
            {list}
          </div>
        </div>
    </div>
  )
}

export default MesPlaylists
