import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CartePlaylists = ({ playlists, selectedPlaylists}) => {

  const id = playlists.relationships.songs.data[0]
  const url = `/api/v1/songs/${id.id}`

  const [img, setImg] = useState()

  useEffect(() => {
  axios(url)
    .then(res => setImg(res.data.img))
    .catch()
   },[id])

  return (
    <div onClick={() => selectedPlaylists(playlists)} id="carte-video">
      <div id="image">
        <img src={img} alt=""/>
      </div>
      <div id="carte-description">
        <p>{playlists.attributes.name}</p>
        <p>{playlists.attributes.score}</p>
      </div>
    </div>
  )
}

export default CartePlaylists
