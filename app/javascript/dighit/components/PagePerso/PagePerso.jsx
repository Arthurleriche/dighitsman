import React, { Fragment, useState, useEffect } from 'react'
import youtube, { baseParams } from '../../api/youtube.jsx'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

import CarteUtilisateur from './CarteUtilisateur'
import MenuPagePerso from './Menu/MenuPagePerso'
import MesSons from './Menu/MesSons'
import MesPlaylists from './Menu/MesPlaylists'
import YoutubeVideo from './Youtube/YoutubeVideo';
import VimeoList from './Vimeo/VimeoList'
import Lecteur from '../Lecteur/Lecteur'
import AjoutRecent from './AjoutRecent'


const PagePerso = ({id}) =>  {

  useEffect(() => {
    const urlUser = `/api/v1/users/${id}`
    axios.get(urlUser)
      .then(res => setUser(res.data))
  }, [])

  const [user, setUser] = useState({})
  const [menu, setMenu] = useState("playlists");
  const [youtube, setYoutube] = useState([]);
  const [vimeoVid, setVimeoVid] = useState([])
  const [loadYoutube, setLoadYoutube] = useState(false)
  const [video, setVideo] = useState("")
  const [actual, setActual] = useState("")
  const [addSong, setAddSong] = useState("")
  const [allSongs, setAllSongs] = useState([])
  const [supSong, setSupSong] = useState(0)

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

  const Vimeo = require('vimeo').Vimeo;
  const vimeo = (search) => {
  const client = new Vimeo("c58df2da4ba05e904dfca0a5b5c13b1b1e2e87a7","ZJx+YvMNDElCtf2vo2G5UGPGHifVtWy0/ubeLKJOWVu9yKvD7+bAB4amM4maee9ncg7Z/hLd1A7CDdThBzFPBxq829LNxMEeUqlApWwVDqficaW+8YOzhUK5XvqOl7lE", "8c8875b588fa09132271810eaede1ddc");
    client.request({
        path: '/videos',
        query: {
          page: 1,
          per_page: 10,
          query: `${search}`,
          sort: 'relevant',
          direction: 'asc'
        }
      }, function (error, body) {
        if (error) {
          alert("pas de video trouver sur vimeo, désolé")
        } else {
          setVimeoVid(body.data)
        }
      })
    setLoadYoutube(true)
    }


  useEffect(() => {
    const urlSongs = '/api/v1/songs'
    axios.get(urlSongs)
      .then(res => setAllSongs(res.data.data.reverse()))
  }, [addSong, supSong])


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


  const test = (event) => {
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position)
    });
  }

  const LecteurPlayer = video === "" ? <div></div> : <Lecteur video={video} id={id} selectedVideo={selectedVideo}/>

  return (
    <Fragment>
    <NavLink to="www.google.com">landing</NavLink>
    <button onClick={test}>test</button>
      <CarteUtilisateur user={user}/>
      <AjoutRecent allSongs={allSongs} selectedVideo={selectedVideo}/>
      <MenuPagePerso
        handleChange={handleChange}
        rechercheYoutube={rechercheYoutube}
        vimeo={vimeo}
      />
      {LecteurPlayer}
        {loadYoutube ?
          <div className="container-menu-youtube">
            {Menu()}
            <div>
            <YoutubeVideo youtube={youtube} selectedVideo={selectedVideo} id={id} playlistActual={playlistActual} addSongToArray={addSongToArray}/>
            <VimeoList vimeoVid={vimeoVid} selectedVideo={selectedVideo} id={id} playlistActual={playlistActual} addSongToArray={addSongToArray}/>
            </div>
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
