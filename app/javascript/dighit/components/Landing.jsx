import React, {useEffect} from 'react'
import axios from 'axios'


import Decouvrir from './Decouvrir'
import PlaylistsLanding from './PlaylistsLanding'
import SongsLanding from './SongsLanding'


export default class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: null,
      playlists: [],
      songs: []


    };
  }

  componentDidMount(){
    let id = this.props.match.params
    id = id.userId
    this.setState({id: id})
    const url = `/api/v1/${this.state.id}/playlists`
    axios(url)
      .then(res => this.setState({playlists: res.data.data}))
      .catch()
    const url2 = `/api/v1/${this.props.id}/songs`
    axios(url2)
      .then(res => this.setState({songs: res.data}))
      .catch()
  }

  render() {
    return (
      <div>
        <h1>je suis landing page</h1>
        <div id="section">
          <Decouvrir />
        </div>
        <div id="section">
          <PlaylistsLanding
            id={this.state.id}
            playlists={this.state.playlists}
          />
        </div>
        <div id="section">
          <SongsLanding
            id={this.state.id}
            songs={this.state.songs}
          />
        </div>
      </div>
    )
  }
}


