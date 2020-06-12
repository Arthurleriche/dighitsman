import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios'

const Popup = (props) =>  {
  const [playlist, setPlaylist] = useState({
    name: "",
    user_id: null
  })

  useState(() => {
    setPlaylist({
      user_id: props.user_id,
    })
  }, [props.id, playlist])

  const createPlaylist = () => {
    console.log(playlist)
    axios.post('/api/v1/playlists', playlist)

    alert('tu viens de creer une playlist')
    console.log(props.id)
    props.closePopup()
  }

  return (
    <div className='popup'>
      <div className='popup\_inner'>
        <input name="name" type="text" value={playlist.name} onChange={(e) => setPlaylist({ name: e.target.value, user_id: props.id})}/>
        <button onClick={props.closePopup}>revenir ecouter</button>
        <button onClick={createPlaylist}>ajouter une playlist</button>
      </div>
    </div>
  );
}

export default Popup;
