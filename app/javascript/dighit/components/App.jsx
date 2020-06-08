import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'



import Landing from './Landing'
import SearchPage from './SearchPage'
import Stand from './Stand'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Stand />
         <Router>
           <Route path='/dighit/:userId/' exact component={Landing} />
           <Route path='/dighit/:userId/search' component={SearchPage} />
        </Router>
      </div>
    )
  }
}

