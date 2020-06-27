import React, {useEffect, useState, Fragment} from 'react'
import ReactPlayer from 'react-player';

const VideoLecteur = ({ nextSong, playeurLecteur, lecteurPlaylist, video }) => {

  const [playeur, setPlayeur] = useState('')
  const [nextUrl, setNextUrl] = useState()
  const [previousUrl, setPreviousUrl] = useState()
  const [play, setPlay] = useState(true)

  const playerUrl = `https://youtube.com/embed/${playeurLecteur}`

  useEffect(() => {
    player()
  }, [video])

  const loadSong = () => {
    const playlist_id = video.attributes.playlist_id
    let tri = lecteurPlaylist.data.filter(song => song.attributes.playlist_id == playlist_id);
    const indexVideo = video.id
    let indexNew = tri.findIndex(song => song.id == indexVideo)
    setTimeout(() => {
    indexNew += 1
      console.log(indexNew)
    },1000)
    setTimeout(() => {
      setNextUrl(tri[indexNew])
    }, 1100)
  }

  const playerNextSongs = () => {
    nextSong(nextUrl.attributes.url)
  }

  const playerPreviousSongs = () => {
    nextSong(previousUrl.attributes.url)
  }

  const playon = () => {
    setPlay(!play)
  }

  const player = () => {
   return ( <ReactPlayer
      url= {playerUrl}
      playing={play}
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
      {play === true ? <button onClick={playon}>stop</button> : <button onClick={playon}>play</button>}
      <button onClick={playerNextSongs}>Next</button>
      <button onClick={playerPreviousSongs}>Next</button>
    </div>
  )
}

export default VideoLecteur
