import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import queryString from 'query-string';
import { history } from 'history';


import Landing from './Landing'
import SearchPage from './SearchPage'
import Stand from './Stand'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Stand />
         <Router history={history}>
           <Route path='/dighit/:userId/' exact component={Landing} />
           <Route path='/dighit/:userId/search' component={SearchPage} />
        </Router>
      </div>
    )
  }
}

