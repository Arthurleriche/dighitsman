import React, {useEffect, useState, Fragment} from 'react'
import ReactPlayer from 'react-player';

const VideoLecteur = ({ nextSong, playeurLecteur, lecteurPlaylist, video }) => {

  const [playeur, setPlayeur] = useState('')
  const [nextUrl, setNextUrl] = useState()

  const playerUrl = `https://youtube.com/embed/${playeurLecteur}`

  useEffect(() => {
    player()
  }, [video])

  const loadSong = () => {
    const playlist_id = video.attributes.playlist_id
    console.log(lecteurPlaylist.data)
    const tri = lecteurPlaylist.data.filter(song => song.attributes.playlist_id == playlist_id);
    const indexVideo = video.id
    let indexNew = tri.findIndex(song => song.id == indexVideo)
    setTimeout(() => {
    indexNew += 1
    },1000)
    setTimeout(() => {
      setNextUrl(tri[indexNew])
    }, 1100)
  }

  const playerNextSongs = () => {
    nextSong(nextUrl.attributes.url)
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
      {player()}
    </div>
  )
}

export default VideoLecteur
