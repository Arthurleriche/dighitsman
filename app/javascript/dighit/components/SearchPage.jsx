import React from 'react'
import axios from 'axios'

import Search from './search'
import Results from './Results'
import youtube, { baseParams } from '../api/youtube.jsx'
import SelectedVideoSearch from './SelectedVideoSearch'
import SelectedMaVideoSearch from './SelectedMaVideoSearch'
import AddVideoPopUp from './Popup/AddVideoPopUp'
import SongsLanding from './SongsLanding'

export default class SearchPage extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    videos:[],
    selectedVideo: '',
    selectedMaVideo: '',
    infosSelectedVideo:[null],
    infosSelectedMaVideo:[null],
    id: null,
    showPopup: false,
    loadplaylist: false,
    loadsong: false,
    playlists:[]
  }
  this.togglePopup = this.togglePopup.bind(this)
  }


  componentDidMount(){
    let id = this.props.match.params
    id = id.userId
    this.setState({id: id})
    axios.get(`/api/v1/${id}/playlists`)
    .then(res => this.setState({playlists:res.data.data}))
    .then(console.log(this.state.playlists))

  }

  searchFunction = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: search
      }
    })
    this.setState({ videos: response.data.items })
  }

  selectedMaVideo = (video) => {
    this.setState({ selectedMaVideo: video.url})
    this.setState({ infosSelectedMaVideo: video })
    this.setState({ selectedVideo: '' })
    this.setState({ infosSelectedVideo: [null] })
  }

  selectedVideo = (video) => {
    this.setState({ selectedVideo: video.id.videoId })
    this.setState({ infosSelectedVideo: video.snippet })
    this.setState({ selectedMaVideo: '' })
    this.setState({ infosSelectedMaVideo: [null] })

  }

  addSong = (params) => {
    axios.post('/api/v1/songs', params);
    alert(`you add ${params.title}`)

    this.setState({ loadsong: !this.state.loadsong })
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup })
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePopup}>rajoute un son ici</button>
        {this.state.showPopup ?
          <AddVideoPopUp
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup}
            id={this.state.id}
            addSong={this.addSong}
          />
        :
          null
        }
        <Search searchFunction={this.searchFunction}/>
        {this.state.selectedVideo === '' ?
          <div></div>
        :
          <div id="section">
            <SelectedVideoSearch
              selectedVideo={this.state.selectedVideo}
              infosSelectedVideo={this.state.infosSelectedVideo}
              id={this.state.id}
              addSong={this.addSong}
              loadplaylist={this.state.loadplaylist}
              playlistsitems={this.state.playlists}
            />
          </div>
        }
        {this.state.selectedMaVideo === '' ?
          <div></div>
        :
          <div id="section">
            <SelectedMaVideoSearch
              infosSelectedMaVideo={this.state.infosSelectedMaVideo}
              selectedMaVideo={this.state.selectedMaVideo}
            />
          </div>
          }
        {this.state.videos.length === 0 ?
          <div></div>
        :
          <div id="section">
            <Results
              videos={this.state.videos}
              selectedVideo={this.selectedVideo}
            />
          </div>
        }
        <div id="section">
        </div>
      </div>
    )
  }
}
