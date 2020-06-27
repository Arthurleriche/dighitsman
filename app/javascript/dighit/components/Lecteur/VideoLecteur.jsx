import React, {useEffect, useState, Fragment} from 'react'
import ReactPlayer from 'react-player';

const VideoLecteur = ({chargeUrl, nextSong, playeurLecteur, lecteurPlaylist, video }) => {

  const [playeur, setPlayeur] = useState('')
  const [play, setPlay] = useState([])
  const [nextUrl, setNextUrl] = useState()
  const [songs, setSongs] = useState([])
  const [load, setLoad] = useState(false)
  const [index, setIndex] = useState(0)

  const playerUrl = `https://youtube.com/embed/${playeurLecteur}`

  useEffect(() => {
    player()
  }, [video])

  useEffect(() => {
    const playlist_id = video.playlist_id
    const tri = lecteurPlaylist.filter(song => song.playlist_id == playlist_id);
    setPlay(tri)
    let url = play.filter(song => song.title == video.title)
    const indexVideo = video.id
    let indexNew = play.findIndex(song => song.id == indexVideo)
    const next = play[indexNew]
    setNextUrl(next)
  }, [video])


  useEffect(() => {
    setTimeout(() => {
    },5000)

  })


  const playerNextSongs = () => {
    nextSong(nextUrl.url)
  }

  const loadSong = () => {
    const playlist_id = video.playlist_id
    const indexVideo = video.id
    const tri = lecteurPlaylist.filter(song => song.playlist_id == playlist_id);
    console.log(tri)
    let indexNew = tri.findIndex(song => song.id == indexVideo)
    setTimeout(() => {
      indexNew += 1
      console.log(indexNew)
      setIndex(indexNew)
    },1000)
    setTimeout(() => {
      setNextUrl(tri[indexNew])
    }, 3000)
  }

  const test = () => {
    setTimeout(() => {
    console.log(nextUrl.url)
    },4000)
  }

  const player = () => {
   return ( <ReactPlayer
      url= {playerUrl}
      playing={true}
      width='200px'
      height= '200px'
      controls={true}
      onBuffer={loadSong}
      onBufferEnd={loadSong}
      onEnded={playerNextSongs}
    /> )
  }

  return(
    <div>
      <p onClick={test}>test</p>
      {player()}
    </div>
  )
}

export default VideoLecteur
