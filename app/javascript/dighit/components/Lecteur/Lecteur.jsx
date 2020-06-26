import React, {useState, useEffect, useRef} from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios'

import VideoLecteur from './VideoLecteur'

const Lecteur = ({ video, id }) => {

  const [lecteurPlaylist, setLecteurPlaylist] = useState([])
  const [play, setPlay] = useState([])
  const [playeurLecteur, setPlayeurLecteur] = useState()
  const [currentState, setCurrentState] = useState()
  const [truel, setTruel] = useState(true)
  const url = `/api/v1/${id}/songs`
  const [index, setIndex] = useState(1)
  const thisPlayer = useRef("");


  useEffect(() => {
    setPlayeurLecteur(video.url)
    axios(url)
      .then(res => setLecteurPlaylist(res.data))
      .catch()
    const tri = lecteurPlaylist.filter(song => song.playlist_id == video.playlist_id );
    setPlay(tri)
    setCurrentState(video)

     },[video])

  const nextSong = () => {
    setTruel(false)
    setIndex(index + 1)
    const ind = index
    const playeur = play[ind].url
    console.log(playeur)
    setPlayeurLecteur(playeur)
    setTruel(true)
    console.log(playeurLecteur)
  }

  return (
    <div id="lecteur">
      <VideoLecteur nextSong={nextSong} playeurLecteur={playeurLecteur} />
      <p>{video.title}</p>
    </div>
  )
}

export default Lecteur

