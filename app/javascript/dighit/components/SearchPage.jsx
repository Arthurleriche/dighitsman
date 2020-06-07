import React from 'react'

import Search from './search'
import Results from './Results'
import youtube, { baseParams } from '../api/youtube.jsx'

export default class SearchPage extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
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

  render() {
    return (
      <div>
        <div id="section">
          <Search searchFunction={this.searchFunction}/>
        </div>
        <div id="section">
          <Results video={this.state.videos} />
        </div>
      </div>
    )
  }
}
