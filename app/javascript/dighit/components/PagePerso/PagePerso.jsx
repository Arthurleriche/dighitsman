import React, { Fragment, useState, useEffect } from 'react'
import youtube, { baseParams } from '../../api/youtube.jsx'
import axios from 'axios'

import CarteUtilisateur from './CarteUtilisateur'
import MenuPagePerso from './Menu/MenuPagePerso'
import MesSons from './Menu/MesSons'
import MesPlaylists from './Menu/MesPlaylists'
import YoutubeVideo from './Youtube/YoutubeVideo';
import Lecteur from '../Lecteur/Lecteur'



const PagePerso = ({id}) =>  {


  const [menu, setMenu] = useState("playlists");
  const [youtube, setYoutube] = useState([]);
  const [loadYoutube, setLoadYoutube] = useState(false)
  const [video, setVideo] = useState("")
  const [actual, setActual] = useState("")
  const [addSong, setAddSong] = useState("")

  const handleChange = (change) => {
    setMenu(change);
  }

  const selectedVideo = (selectedvideo) => {
    setVideo(selectedvideo)
  }

  const rechercheYoutube = async (search) => {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        ...baseParams,
        q: search
      }
    })
    setYoutube(response.data.items);
    setLoadYoutube(true)
  }

  const Menu = () => {
    switch(menu) {
      case "sons":
        return <MesSons selectedVideo={selectedVideo} id={id}/>
      case "playlists":
        return <MesPlaylists selectedVideo={selectedVideo} id={id} actual={actual} addSong={addSong}/>
    };
  };

  const playlistActual = (playlist) => {
    setActual(playlist)
  }

  const addSongToArray = (song) => {
    setAddSong(song)
  }

  const test = () => {
    axios("api/v1/current_user")
      .then(res => console.log(res.data))
      console.log("je suis test")
  }


  const LecteurPlayer = video === "" ? <div></div> : <Lecteur video={video} id={id} selectedVideo={selectedVideo}/>

  return (
    <Fragment>
    <button onClick={test}>test</button>
      <CarteUtilisateur />
      <MenuPagePerso
        handleChange={handleChange}
        rechercheYoutube={rechercheYoutube}
      />
      {LecteurPlayer}
        {loadYoutube ?
          <div className="container-menu-youtube">
            {Menu()}
            <YoutubeVideo youtube={youtube} selectedVideo={selectedVideo} id={id} playlistActual={playlistActual} addSongToArray={addSongToArray}/>
          </div>
        :
          <div className="container-menu">
            {Menu()}
          </div>
        }
    </Fragment>
  )
}

export default PagePerso
