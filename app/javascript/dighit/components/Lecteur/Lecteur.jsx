import React, {useState, useEffect, useRef} from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios'

import VideoLecteur from './VideoLecteur'

const Lecteur = ({ video, id }) => {

  const [lecteurPlaylist, setLecteurPlaylist] = useState([])
  const [playeurLecteur, setPlayeurLecteur] = useState()

  const url = `/api/v1/${id}/songs`
  const [index, setIndex] = useState(0)

  useEffect(() => {
    axios(url)
      .then(res => setLecteurPlaylist(res.data))
      .catch()
      setPlayeurLecteur(video.attributes.url)
  },[video])

  const nextSong = (index) => {
    setPlayeurLecteur(index)
  }

  return (
    <div id="lecteur">
      <VideoLecteur nextSong={nextSong} playeurLecteur={playeurLecteur} lecteurPlaylist={lecteurPlaylist} video={video}/>
      <p>{video.title}</p>
      <p onClick={find}>find</p>
    </div>
  )
}

export default Lecteur

