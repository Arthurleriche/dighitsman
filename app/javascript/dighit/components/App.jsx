import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'



import Landing from './Landing'
import SearchPage from './SearchPage'
import VideoTest2 from './Cloudinary/VideoTest2'


export default class App extends React.Component {
  render() {
    return (
      <div>
         <Router history={history}>
           <Route path='/dighit/:userId/' exact component={Landing} />
           <Route path='/dighit/:userId/search' component={SearchPage} />
        </Router>
      </div>
    )
  }
}

