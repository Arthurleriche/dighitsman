import React, {useState, useEffect, useRef} from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios'

import VideoLecteur from './VideoLecteur'

const Lecteur = ({ video, id, selectedVideo }) => {

  const [lecteurPlaylist, setLecteurPlaylist] = useState([])
  const [playeurLecteur, setPlayeurLecteur] = useState()

  const url = `/api/v1/${id}/songs`
  const [index, setIndex] = useState(0)

  useEffect(() => {
    axios(url)
      .then(res => setLecteurPlaylist(res.data))
      .catch()
  },[video])

  const nextSong = (index) => {
    setPlayeurLecteur(index)
  }

  return (
    <div id="lecteur">
      <VideoLecteur nextSong={nextSong} playeurLecteur={playeurLecteur} lecteurPlaylist={lecteurPlaylist} video={video} selectedVideo={selectedVideo}/>
    </div>
  )
}

export default Lecteur

