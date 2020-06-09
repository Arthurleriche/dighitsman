import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Decouvrir = (props) => {
  const [decouvrir, setDecouvrir] = useState([])

  useEffect(() => {
    axios.get("/api/v1/playlists")
     .then(res => setDecouvrir(res.data.data))
     .catch()
  }, []);

  const list = () => {
    return decouvrir.map(playlist => {
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
        <h2>Découvrir</h2>
      </div>
      <div id='card'>
      {list()}
      </div>
    </div>
  )
}

export default Decouvrir
