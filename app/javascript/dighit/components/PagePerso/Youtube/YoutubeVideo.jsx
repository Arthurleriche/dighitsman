import React, { useState }  from "react"

import CarteYoutube from './CarteYoutube'

const YoutubeVideo = ({ youtube }) => {

const list = youtube.map((data) => {
   return <CarteYoutube resultat={data} />
  })

  return (
    <div id="youtube">
      <div id="mes-sons-youtube">
        <h3 className="titre">Resultat Youtube</h3>
          <div id="mes-sons-listes">
            <div>
              {list}
            </div>
          </div>
      </div>
    </div>
  )
}

export default YoutubeVideo
