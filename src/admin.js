// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dumb from './components/dumb'

const Admin = () => {
  return (
    <Switch>
      <Route path="/" render={() => <Dumb text="home admin" />} />
    </Switch>
  )
}

export default Admin
