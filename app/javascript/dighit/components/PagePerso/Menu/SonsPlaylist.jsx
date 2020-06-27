import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios'

import CarteVideo from './CarteVideo'

const SonsPlaylist = ({toutesLesPlaylists, playlist, id, selectedVideo, name}) => {

  const url = `/api/v1/${id}/songs`

  const [songs, setSongs] = useState([])
  const [song, setSong] = useState([])

  useEffect(() => {
    axios(url)
      .then(res => setSongs(res.data.data))
      .catch()
    const tri = songs.filter(song => song.attributes.playlist_id == playlist );
    setSong(tri)
     },[playlist])

  const listSon = song.map((data) => {
    return <CarteVideo songs={data} key={data.id} selectedVideo={selectedVideo}/>
  })

  return (
        <Fragment>
        <h3 className="titre">{name}</h3>
        <div id="mes-sons-listes">
          <div id="mes-sons-liste">
            {listSon}
          </div>
        </div>
        </Fragment>
  )
}
export default SonsPlaylist
