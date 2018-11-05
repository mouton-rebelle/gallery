// @flow

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Connected from './components/connected'
import Admin from './admin'
import Dumb from './components/dumb'

const App = () => {
  return (
    <Connected>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Dumb text="home" />} />
          <Route path="/admin" render={() => <Admin />} />
        </Switch>
      </Router>
    </Connected>
  )
}

export default App
