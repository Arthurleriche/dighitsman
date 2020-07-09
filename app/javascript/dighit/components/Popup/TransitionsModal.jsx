import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import CarteVideoPopUp from './CarteVideoPopUp'
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500,
    height: 500,
  },
}));

export default function TransitionsModal({addSong, toutesLesPlaylists, playlist, id, selectedVideo, name}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const url = `/api/v1/playlists/${playlist}/songs`

  const [songs, setSongs] = useState([])
  const [song, setSong] = useState([])


  useEffect(() => {
    axios(url)
      .then(res => setSongs(res.data.data))
      .catch()
      listSon()
     },[playlist, song, addSong])


  const destroySong = (supSong) => {
    let reponse = confirm("Veux tu supprimer la vidéo ?")
    const urldel = `/api/v1/songs/${supSong.id}`
    if(reponse){
    axios.delete(urldel)
    }
    setTimeout(() => {
      setSong(supSong)
      console.log('supsong')
    }, 1000)
  }

  const listSon = () => {
   return songs.map((data) => {
    return <CarteVideoPopUp songs={data} key={data.id} selectedVideo={selectedVideo} destroySong={destroySong}/>
  })}


  return (
    <div>
      <VisibilityIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} id="popup-video-playlit">
            {listSon()}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
