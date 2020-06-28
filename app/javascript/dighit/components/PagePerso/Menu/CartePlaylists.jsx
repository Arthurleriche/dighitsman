import React, { useState, useEffect } from 'react'
import axios from 'axios'

import vinyl from "../../../../../assets/images/VINYL.png"

import { Card, Avatar } from 'antd';
import "antd/dist/antd.css";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const CartePlaylists = ({ playlists, selectedPlaylists, playPlaylist}) => {

  const { Meta } = Card;
  const [img, setImg] = useState()

  useEffect(() => {
  if (playlists.relationships.songs.data.length > 0){
  const id = playlists.relationships.songs.data[0]
  const url = `/api/v1/songs/${id.id}`
      axios(url)
        .then(res => setImg(res.data.data.attributes.img))
        .catch()
  } else {
    setImg(vinyl)
    }
   },[playlists])



  return (
    <div onClick={() => selectedPlaylists(playlists)} id="carte-video">
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={img}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" onClick={() => playPlaylist(playlists.id)}/>,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={playlists.attributes.name}
        description="Style"
      />
  </Card>,
    </div>
  )
}


export default CartePlaylists

