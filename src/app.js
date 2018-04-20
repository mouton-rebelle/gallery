// @flow

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Admin from './admin'
import Dumb from './components/dumb'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Dumb text="home" />} />
        <Route path="/admin" render={() => <Admin />} />
      </Switch>
    </Router>
  )
}

export default App
