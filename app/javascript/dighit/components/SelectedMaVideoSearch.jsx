import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios'

const SelectedMaVideoSearch = ({selectedMaVideo, infosSelectedMaVideo, id}) => {

  const player = `https://youtube.com/embed/${selectedMaVideo}`
  const user_id = id
  console.log(selectedMaVideo)


  if (selectedMaVideo === '') {
    return <div> selectionner une vidéo </div>
  } else {
    return (
      <div id="section">
        <div id="title">
          <h2>{infosSelectedMaVideo.title}</h2>
        </div>
        <div id='card'>
          <div id="card-playlist">
            <ReactPlayer
              url={player}
              playing={true}
              width='300px'
              height='300px'
              controls={true}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default SelectedMaVideoSearch
