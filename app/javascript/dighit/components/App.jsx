import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import queryString from 'query-string';
import { history } from 'history';


import Landing from './Landing'
import Playlists from './Playlists'
import Users from './Users'

export default class App extends React.Component {
  render() {
    return (
      <div>
         <Router history={history}>
           <Route path='/dighit/:userId/' exact component={Landing} />
           <Route path='/dighit/:userId/playlist' component={Playlists} />
           <Route path='/dighit/:userId/users' component={Users} />
        </Router>
      </div>
    )
  }
}

