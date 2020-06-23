import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios'

const Popup = ({id, closePopup, createPlaylist}) =>  {
  const [playlist, setPlaylist] = useState({
    name: "",
    user_id: null
  })

  useState(() => {
    setPlaylist({
      user_id: id,
    })
  }, [id, playlist])



  const newPlaylist = () => {
    console.log(playlist)
    createPlaylist(playlist)
  }

  return (
    <div className='popup'>
      <div className='popup\_inner'>
        <input name="name" type="text" value={playlist.name} onChange={(e) => setPlaylist({ name: e.target.value, user_id: id})}/>
        <button onClick={closePopup}>revenir ecouter</button>
        <button onClick={newPlaylist} >ajouter une playlist</button>
      </div>
    </div>
  );
}

export default Popup;
