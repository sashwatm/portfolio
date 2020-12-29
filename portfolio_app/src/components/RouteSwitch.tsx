import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import NotFound from './notFound/NotFound'


class RouteSwitch extends Component {
  constructor(props: any) {
    super(props);
    this.state = { user: null }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <Home />} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default RouteSwitch
