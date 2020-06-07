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
      playlists: []

    };
  }

  componentDidMount(){
    let id = this.props.match.params
    id = id.userId
    this.setState({id: id})
  }



  render() {
    return (
      <div>
        <h1>je suis landing page</h1>
        <div id="section">
          <Decouvrir />
        </div>
        <div id="section">
          <PlaylistsLanding id={this.state.id}/>
        </div>
      </div>
    )
  }
}


