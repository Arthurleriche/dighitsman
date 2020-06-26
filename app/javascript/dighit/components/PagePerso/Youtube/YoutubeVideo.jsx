import React, { useState }  from "react"

import CarteYoutube from './CarteYoutube'

const YoutubeVideo = ({ youtube, selectedVideo, id}) => {

  const [selected, setSelected] = useState({
    url: "",
    title: "",
    description: ""
  })

  const video = (song) => {
    setSelected({
      url: song.id.videoId,
      title: song.snippet.title,
      description: song.snippet.description
    })
  }

  const handleSelected = () => {
    selectedVideo(selected)
  }

  const list = youtube.map((data) => {
   return <CarteYoutube resultat={data} video={video} handleSelected={handleSelected} id={id}/>
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
