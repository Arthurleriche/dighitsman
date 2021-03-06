import React, {useState, useEffect} from 'react'
import axios from 'axios'


const PlaylistLanding = (props) => {

const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    setPlaylists(props.playlists)
    const url = `/api/v1/${props.id}/playlists`
    axios(url)
      .then(res => setPlaylists(res.data.data))
      .catch()
     },[props.playlists])

  const list = () => {
    return playlists.map(playlist => {
      return (
        <div key={playlist.id} id="card-playlist">
          <h3>{playlist.attributes.name}</h3>
        </div>
      );
    });
  };

  return (
    <div id="section">
      <div id="title">
        <h2>mes playlists</h2>
      </div>
      <div id='card'>
        {list()}
      </div>
    </div>
  )

}

export default PlaylistLanding

