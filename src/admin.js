// @flow

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AdminContainer } from './components/admin/container'
import Dumb from './components/dumb'
import { AdminCategoryConnected } from './components/admin/category'
const Admin = () => {
  return (
    <AdminContainer>
      <Switch>
        <Route path="/admin/" exact render={() => <Dumb text="home admin" />} />
        <Route path="/admin/items" render={() => <Dumb text="admin items" />} />
        <Route path="/admin/categories" render={() => <AdminCategoryConnected />} />
      </Switch>
    </AdminContainer>
  )
}

export default Admin
