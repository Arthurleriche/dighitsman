import React, { useState }  from "react"

import CarteYoutube from './CarteYoutube'

const YoutubeVideo = ({playlistActual, youtube, selectedVideo, id, addSongToArray}) => {

  const [selected, setSelected] = useState({
    url: "",
    title: "",
    description: ""
  })

  const video = (song) => {
    setSelected({
      attributes: {
        url: song.id.videoId,
        title: song.snippet.title,
        description: song.snippet.description
      }
    })
  }

  const handleSelected = () => {
    selectedVideo(selected)
  }

  const list = youtube.map((data) => {
   return <CarteYoutube  key={data.id.kind} resultat={data} video={video} handleSelected={handleSelected} id={id} playlistActual={playlistActual} addSongToArray={addSongToArray}/>
  })

  return (
    <div id="youtube">
      <div id="mon-youtube">
        <h3 className="titre">Resultat Youtube</h3>
          <div id="mes-son-youtube">
            <div>
              {list}
            </div>
          </div>
      </div>
    </div>
  )
}

export default YoutubeVideo
