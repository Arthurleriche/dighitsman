import React, { useState, useEffect } from 'react'
import axios from 'axios'

import vinyl from "../../../../../assets/images/VINYL.png"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CartePlaylists = ({songs, playlists, selectedPlaylists, playPlaylist}) => {
  const classes = useStyles();
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

  return(
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {playlists.attributes.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div id="icon">
        <VisibilityIcon onClick={() => selectedPlaylists(playlists)}/>
      </div>
      <div id="icon">
        <QueueMusicIcon onClick={() => playPlaylist(playlists.id)}/>
      </div>
      </CardActions>
    </Card>
  )
}


export default CartePlaylists
