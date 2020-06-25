import React, { Fragment, useState, useEffect } from 'react'
import youtube, { baseParams } from '../../api/youtube.jsx'
import axios from 'axios'

import CarteUtilisateur from './CarteUtilisateur'
import MenuPagePerso from './Menu/MenuPagePerso'
import MesSons from './Menu/MesSons'
import MesPlaylists from './Menu/MesPlaylists'
import YoutubeVideo from './Youtube/YoutubeVideo';
import Lecteur from '../Lecteur/Lecteur'


const PagePerso = () =>  {

  const [menu, setMenu] = useState("sons");
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
        return <MesSons selectedVideo={selectedVideo}/>
      case "playlists":
        return <MesPlaylists/>
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
            <YoutubeVideo youtube={youtube} selectedVideo={selectedVideo}/>
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
