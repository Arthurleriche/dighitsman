import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: 250,
  },
  cover: {
    width: 151,

  },

  lecteur: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 16,
  },

  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const VideoLecteur = ({ nextSong, playeurLecteur, lecteurPlaylist, video, selectedVideo}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [playeur, setPlayeur] = useState('')
  const [nextUrl, setNextUrl] = useState()
  const [previousUrl, setPreviousUrl] = useState()
  const [play, setPlay] = useState(true)
  const [videoPlaying, setVideoPlaying] = useState()
  const [allSongs, setAllSongs] = useState([])

  const playerUrl = `https://youtube.com/embed/${video.attributes.url}`

  useEffect(() => {

    player()
  }, [video])

  let nextVideo = {}
  let previousVideo = {}
  let tri = {}
  let indexNew = 0
  let previousIndex = 0

  useEffect(() => {
    player()
  }, [indexNew])

  const loadSong = () => {
    const playlist_id = video.attributes.playlist_id
    tri = lecteurPlaylist.data.filter(song => song.attributes.playlist_id == playlist_id);
    const indexVideo = video.id
    indexNew = tri.findIndex(song => song.id == indexVideo)
    previousIndex = indexNew - 1
    indexNew += 1
    previousVideo = tri[previousIndex]
    nextVideo = tri[indexNew]
    setTimeout(() => {
      console.log(nextVideo)
    }, 3000)
  }

  const playerNextSongs = (e) => {
    nextVideo === undefined ?  selectedVideo(video) : selectedVideo(nextVideo)
    play === false ? setPlay(true) : setPlay(true)
  }


  const playerPreviousSongs = () => {
    previousVideo === undefined ?  selectedVideo(video) : selectedVideo(previousVideo)
  }

  const playon = () => {
    setPlay(!play)
  }

  const test = () => {
    console.log('onReady')
    console.log(video)
  }

  const player = () => {
   return ( <ReactPlayer
      url={playerUrl}
      playing={play}
      controls={true}
      onEnded={playerNextSongs}
      onBufferEnd={loadSong}
      onPause={loadSong}
      onReady={loadSong}
    /> )
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {video.attributes.title}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon onClick={playerNextSongs}/> : <SkipPreviousIcon onClick={playerPreviousSongs} />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} onClick={playon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon onClick={playerPreviousSongs} /> : <SkipNextIcon onClick={playerNextSongs} />}
          </IconButton>
        </div>
      </div>
      <div className={classes.lecteur}>
      <ReactPlayer
        className={classes.cover}
        url={playerUrl}
        playing={play}
        width='200px'
        height= '200px'
        controls={true}
        onEnded={playerNextSongs}
        onBufferEnd={loadSong}
        onPause={loadSong}
        onReady={loadSong}
      />
      </div>
    </Card>
  );
}

export default VideoLecteur
