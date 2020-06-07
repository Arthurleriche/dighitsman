import React, {useState, useEffect} from 'react'
import axios from 'axios'


const SongsLanding = (props) => {

const [songs, setSongs] = useState([])

  useEffect(() => {
    const url = `/api/v1/${props.id}/songs`
    axios(url)
      .then(res => setSongs(res.data))
      .catch()
     },[props.id])

  const list = () => {
    return songs.map(song => {
      return (
        <div key={song.id} id="card-playlist">
          <h3>{song.title}</h3>
        </div>
      );
    });
  };

  return (
    <div id="section">
      <div id="title">
        <h2>mes son</h2>
      </div>
      <div id='card'>
        {list()}
      </div>
    </div>
  )

}

export default SongsLanding

