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


const PagePerso = () =>  {

  const [menu, setMenu] = useState("sons");
  const [youtube, setYoutube] = useState([]);

  const handleChange = (change) => {
    setMenu(change);
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
  }

  const Menu = () => {
    switch(menu) {
      case "sons":
        return <MesSons/>
      case "playlists":
        return <MesPlaylists/>
    };
  };

  return (
    <Fragment>
      <Lecteur />
      <CarteUtilisateur />
      <MenuPagePerso
        handleChange={handleChange}
        rechercheYoutube={rechercheYoutube}
      />
      <div id="youtube-menu" className="container-youtube-menu">
        {Menu()}
        <YoutubeVideo youtube={youtube} />
      </div>
    <TestArray/>
    </Fragment>
  )
}

export default PagePerso
