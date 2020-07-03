import React, { useState, useEffect } from 'react'
import axios from 'axios'

import vinyl from "../../../../../assets/images/VINYL.png"

import { Card, Avatar } from 'antd';
import "antd/dist/antd.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlayCircleOutlined } from '@ant-design/icons';


const CartePlaylists = ({songs, playlists, selectedPlaylists, playPlaylist}) => {

  const { Meta } = Card;
  const [img, setImg] = useState()
  const [song, setSong] = useState([])

  useEffect(() => {
  if (playlists.relationships.songs.data[0]){
  const id = playlists.relationships.songs.data[0]
  const item = playlists.relationships.songs.data[Math.floor(Math.random()*playlists.relationships.songs.data.length)];
  const url = `/api/v1/songs/${item.id}`
      axios(url)
        .then(res => setImg(res.data.data.attributes.img))
        .catch()
  let playlistSong = songs.filter(song => song.attributes.playlist_id == playlists.id);
  } else {
    setImg(vinyl)
    }
   },[playlists, songs])

  const listOfSongs = song.map((data) => {
    return (
      <div id="song-playlist">
      <p>{data.attributes.title}</p>
      </div>
      )
  })
  return (
    <div onClick={() => selectedPlaylists(playlists)} id="carte-video">
    {listOfSongs}
    <Card
      style={{ width: 300 }}

      cover={
        <img
          alt="example"
          src={img}
        />
      }
      actions={[
        <SettingOutlined key="setting"/>,
        <PlayCircleOutlined key="edit" onClick={() => playPlaylist(playlists.id)}/>,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={playlists.attributes.name}
        description="Style"
      />
  </Card>
    <div>
    </div>
    </div>
  )
}


export default CartePlaylists

