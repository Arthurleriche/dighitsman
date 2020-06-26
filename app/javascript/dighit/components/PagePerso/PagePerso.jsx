import React, { Fragment, useState, useEffect } from 'react'
import youtube, { baseParams } from '../../api/youtube.jsx'
import axios from 'axios'

import CarteUtilisateur from './CarteUtilisateur'
import MenuPagePerso from './Menu/MenuPagePerso'
import MesSons from './Menu/MesSons'
import MesPlaylists from './Menu/MesPlaylists'
import YoutubeVideo from './Youtube/YoutubeVideo';
import Lecteur from '../Lecteur/Lecteur'

import TestArray from './testarray'


const PagePerso = ({id}) =>  {


  const [menu, setMenu] = useState("playlists");
  const [youtube, setYoutube] = useState([]);
  const [loadYoutube, setLoadYoutube] = useState(false)
  const [video, setVideo] = useState("")

  const handleChange = (change) => {
    setMenu(change);
  }

  const selectedVideo = (selectedvideo) => {
    setVideo(selectedvideo)
  }

  // useEffect(() => {
  //   axios.get("https://www.googleapis.com/youtube/v3/search", {
  //     params: {
  //       ...baseParams,
  //       q: "leikelei47"
  //     }
  //   })
  //   .then(response => setYoutube(response.data.items));
  // }, [])

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
        return <MesPlaylists selectedVideo={selectedVideo} id={id}/>
    };
  };

  const LecteurPlayer = video === "" ? <div></div> : <Lecteur video={video}/>

  return (
    <Fragment>
      <CarteUtilisateur />
      {LecteurPlayer}
      <MenuPagePerso
        handleChange={handleChange}
        rechercheYoutube={rechercheYoutube}
      />
        {loadYoutube ?
          <div className="container-menu-youtube">
            {Menu()}
            <YoutubeVideo youtube={youtube} selectedVideo={selectedVideo} id={id}/>
          </div>
        :
          <div className="container-menu">
            {Menu()}
          </div>
        }
        <TestArray />
    </Fragment>
  )
}

export default PagePerso