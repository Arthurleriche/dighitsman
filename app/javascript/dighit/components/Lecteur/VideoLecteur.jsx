import React, {useEffect, useState, Fragment} from 'react'
import ReactPlayer from 'react-player';

const VideoLecteur = ({ nextSong, playeurLecteur }) => {

  const [playeur, setPlayeur] = useState('')
  const [load, setLoad] = useState(false)
  const player = `https://youtube.com/embed/${playeur}`

  useEffect(() => {
    setLoad(false)
    setPlayeur(playeurLecteur)
    setLoad(true)
    play()
  }, [playeurLecteur])

  const play = () => {
   return ( <ReactPlayer
      url= {player}
      playing={load}
      width='200px'
      height= '200px'
      controls={true}
      onEnded={nextSong}
    /> )
   console.log("je suis la")
  }

  return(
    <div>
      {play()}
    </div>
  )
}

export default VideoLecteur
