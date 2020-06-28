import React, {useEffect, useState, Fragment} from 'react'
import ReactPlayer from 'react-player';

const VideoLecteur = ({video, nextSong, playeurLecteur, lecteurPlaylist, selectedVideo }) => {

  const [playeur, setPlayeur] = useState('')
  const [nextUrl, setNextUrl] = useState()
  const [previousUrl, setPreviousUrl] = useState()
  const [play, setPlay] = useState(true)
  const [videoPlaying, setVideoPlaying] = useState()

  const playerUrl = `https://youtube.com/embed/${video.attributes.url}`

  useEffect(() => {
    console.log(video.attributes.url)
    player()
  }, [video])

  let nextVideo = {}
  let previousVideo = {}
  let tri = {}
  let indexNew = 0
  let previousIndex = 0

  const loadSong = () => {
    const playlist_id = video.attributes.playlist_id
    tri = lecteurPlaylist.data.filter(song => song.attributes.playlist_id == playlist_id);
    const indexVideo = video.id
    indexNew = tri.findIndex(song => song.id == indexVideo)
    previousIndex = indexNew - 1
    indexNew += 1
    previousVideo = tri[previousIndex]
    nextVideo = tri[indexNew]
    console.log(previousVideo)
    console.log(nextVideo)
  }

  const playerNextSongs = () => {
    nextVideo === undefined ?  selectedVideo(tri[0]) : selectedVideo(nextVideo)

  }


  const playerPreviousSongs = () => {
    previousVideo === undefined ?  selectedVideo(video) : selectedVideo(previousVideo)

  }

  const playon = () => {
    setPlay(!play)
  }

  const player = (play) => {
   return ( <ReactPlayer
      url={playerUrl}
      playing={true}
      width='400px'
      height= '200px'
      controls={true}
      onEnded={playerNextSongs}
      onBufferEnd={loadSong}
    /> )
  }


  return(
    <div id="video-lecteur">
      <div >
        {player()}
      </div>
      <div id="action-lecteur">
        {play === true ? <button onClick={playon}>stop</button> : <button onClick={playon}>play</button>}
        <button onClick={playerPreviousSongs}>Previous</button>
        <button onClick={playerNextSongs}>Next</button>
      </div>
    </div>
  )
}

export default VideoLecteur
