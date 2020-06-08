import React, { useState, useEffect } from 'react'


const SelectedVideoSearch = ({selectedVideo, infosSelectedVideo, id, addSong}) => {

  const [addNewSong, setAddNewSong] = useState({
    url: '',
    title: '',
    description: '',
    img: '',
    user_id: null,
    playlists_id: null,
    score: null
    })

  const player = `https://youtube.com/embed/${selectedVideo}`
  const test = console.log(id)
  const user_id = id

  useEffect(() => {
    setAddNewSong({
      url: {selectedVideo},
      title: `${infosSelectedVideo.title}`,
      description: `${infosSelectedVideo.description}`,
      img: `${infosSelectedVideo.thumbnails.high.url}`,
      user_id: user_id,
      playlist_id: 1,
      score: 0
    })
  }, [selectedVideo])

 const handleSubmit = (e) => {
    e.preventDefault()
    addSong(addNewSong)
  }

  if (selectedVideo === '') {
    return <div> selectionner une vidéo </div>
  } else {
    return (
      <div id="section">
        <div id="title">
          <h2>{infosSelectedVideo.title}</h2>
        </div>
        <div id='card'>
          <div id="card-playlist">
            <iframe src={player}/>
          </div>
          <button onClick={handleSubmit}>ajoute moi a ta playlist</button>
        </div>
      </div>
    )
  }
}


export default SelectedVideoSearch
