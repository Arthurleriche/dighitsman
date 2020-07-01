import React, {useState} from 'react'
import Popup from "reactjs-popup";

const AddPlaylist = ({ id, createPlaylist, addPlaylistToArray}) => {

  const [playlist, setPlaylist] = useState([{
    attributes: {
    name: "",
    user_id: null
  }}])

  const [open, setOpen] = useState(false)


  const create = () => {
    createPlaylist(playlist.attributes)
    addPlaylistToArray(playlist)
    setOpen(!open)
  }

  return(
      <Popup trigger={<button> Trigger</button>} position="left" open={open}>
        <div>
          <input name="name" type="text" value={playlist.name} onChange={(e) => setPlaylist({ attributes: {name: e.target.value, user_id: id}})}/>
          <button onClick={create}>Create Playlist</button>
        </div>
    </Popup>
  )
}

export default AddPlaylist
