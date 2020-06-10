import React from 'react'
import axios from 'axios'

import Search from './search'
import Results from './Results'
import youtube, { baseParams } from '../api/youtube.jsx'
import SelectedVideoSearch from './SelectedVideoSearch'
// import Popup from './Playlists/Popup'

export default class SearchPage extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    videos:[],
    selectedVideo: '',
    infosSelectedVideo:[null],
    id: null,
    showPopup: false
  }
  this.togglePopup = this.togglePopup.bind(this)
  }


  componentDidMount(){
    let id = this.props.match.params
    id = id.userId
    this.setState({id: id})
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

  selectedVideo = (video) => {
    this.setState({ selectedVideo: video.id.videoId })
    this.setState({ infosSelectedVideo: video.snippet })
  }

  addSong = (params) => {
   axios.post('/api/v1/songs', params);
   alert(`you add ${params.title}`)
    }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    return (
      <div>
          <Search searchFunction={this.searchFunction}/>
          {this.state.selectedVideo === '' ? <div></div> :
            <div id="section">
              <SelectedVideoSearch
                selectedVideo={this.state.selectedVideo}
                infosSelectedVideo={this.state.infosSelectedVideo}
                addSong={this.addSong}
                id={this.state.id}
              />
            </div>
          }
        <div id="section">
          <Results
            videos={this.state.videos}
            selectedVideo={this.selectedVideo}
             />
        </div>
      </div>
    )
  }
}
