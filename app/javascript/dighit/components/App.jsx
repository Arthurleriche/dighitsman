import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Landing from './Landing'
import SearchPage from './SearchPage'
import PagePerso from './PagePerso/PagePerso'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
         <Router history={history}>
           <Route path='/dighit/:userId/search' component={SearchPage} />
           <Route path='/dighit/:userId/landing' render={ ({match}) => <PagePerso id={match.params.userId}/> } />
        </Router>
      </div>
    )
  }
}
