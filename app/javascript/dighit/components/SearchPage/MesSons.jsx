import React, {useState, useEffect} from 'react'
import axios from 'axios'

import MaVideo from './MaVideo'

const MesSons = ({id, addSong, selectedMaVideo, load}) => {

const [songs, setSongs] = useState([])
const url = `/api/v1/${id}/songs`

  useEffect(() => {
    axios(url)
      .then(res => setSongs(res.data))
      .catch()
      .then(console.log(load))
     },[load, id])

  const test = () => {
    console.log(songs)
  }

  const list = songs.map(data => {
      return <MaVideo video={data} selectedMaVideo={selectedMaVideo} />
    });


  return (
    <div id="section">
      <div id="title">
        <h2>Mes Sons à l'écoute</h2>
      </div>
      <div id='card'>
        {list}
      </div>
    </div>
  )
}

export default MesSons
