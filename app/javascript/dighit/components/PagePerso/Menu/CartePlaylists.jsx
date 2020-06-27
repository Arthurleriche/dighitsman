import React, { useState, useEffect } from 'react'
import axios from 'axios'

import avatar from "../../../../../assets/images/avatar.jpeg"


const CartePlaylists = ({ playlists, selectedPlaylists}) => {

  const [img, setImg] = useState()

  useEffect(() => {
  if (playlists.relationships.songs.data.length > 0){
  const id = playlists.relationships.songs.data[0]
  const url = `/api/v1/songs/${id.id}`
      axios(url)
        .then(res => setImg(res.data.data.attributes.img))
        .catch()
  } else {
    setImg(avatar)
    }
   },[playlists])


console.log(playlists)
  return (
    <div onClick={() => selectedPlaylists(playlists)} id="carte-video">
      <div id="image">
        <img src={img} alt=""/>
      </div>
      <div id="carte-description">
      <p>{playlists.attributes.name}</p>
      </div>
    </div>
  )
}

export default CartePlaylists

